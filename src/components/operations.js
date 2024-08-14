import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import {Balance} from '../services/balance.js';

export class Operations {
    constructor() {
        // Здесь проблема в том, что в операциях вызываю баланс, а при загрузке баланса уходит запрос на операции, не представляю как это можно решить

        // this.balance = new Balance;
        // this.currentBalance = this.balance.getBalance();

        this.period = 'all';

        // Для работы со всеми страничками (редактированием, созданием и основной)
        this.urlRoute = window.location.hash.split('?')[0];

        this.type = null;
        this.category = null;
        this.count = null;
        this.date = null;
        this.comment = null;

        this.currentIdCategory = null;

        this.init();
    }

    init() {
        if (this.urlRoute === `#/operations`) {

            this.getTable('today');
            this.setFiltersBtn();

            let currentFilters = document.getElementById('today');
            currentFilters.classList.add('btn-secondary');
            currentFilters.classList.remove('btn-outline-secondary');

        } else if (this.urlRoute === `#/edit_operations`) {
            const params = window.location.hash.split('?')[1].split('=')[1];
            this.operation = this.getOperation(params);

            this.typeInput = document.getElementById('inputType');
            this.countInput = document.getElementById('inputCount');
            this.dateInput = document.getElementById('inputDate');
            this.commentInput = document.getElementById('inputComment');
            this.editElement = document.getElementById('edit-btn');

            const data = this.operation.then(item => {
                item.type === 'income' ? this.typeInput.value = 'Доход' : this.typeInput.value = 'Расход';
                this.countInput.value = item.amount;
                this.dateInput.value = item.date;
                this.commentInput.value = item.comment;

                console.log(item.type)
            })

            this.typeInput.setAttribute('disabled', true)

            this.editOperations();

        } else if (this.urlRoute === `#/create_operations`) {

            this.typeSelect = document.getElementById('inputType');
            this.categorySelect = document.getElementById('inputCategory');
            this.countInput = document.getElementById('inputCount');
            this.dateInput = document.getElementById('inputDate');
            this.commentInput = document.getElementById('inputComment');
            this.createButton = document.getElementById('createOperation');

            this.categorySelect.classList.add('d-none');
            this.countInput.classList.add('d-none');
            this.dateInput.classList.add('d-none');
            this.commentInput.classList.add('d-none');

            this.typeSelect.onchange = () => {
                this.categorySelect.innerHTML = '';

                this.getForm(this.typeSelect.value);
            }

            this.createButton.onclick = (e) => {
                e.preventDefault();
                this.categoryRegex = /[0-9]{1,7}/g;

                this.categoryValueError = document.getElementById('valueError');
                this.categoryRegexError = document.getElementById('regexError');

                this.categoryValueError.classList.remove('d-block');
                this.categoryRegexError.classList.remove('d-block');

                this.type = this.typeSelect.value;
                this.categoryId = this.categorySelect.value;
                this.date = this.dateInput.value;
                this.commet = this.commentInput.value;

                if (this.countInput.value && this.countInput.value.match(this.categoryRegex)) {
                    this.amount = this.countInput.value;
                    this.createOperation();
                } else if (!this.countInput.value) {
                    this.categoryValueError.classList.remove('d-none');
                    this.categoryValueError.classList.add('d-block');
                } else if (!this.countInput.value.match(this.categoryRegex)) {
                    this.categoryRegexError.classList.remove('d-none');
                    this.categoryRegexError.classList.add('d-block');
                }

            }
        }
    };

    getTable(period, dateFrom, dateTo) {
        // Собираем табличку с доходами/расходами
        let table = document.getElementById('table-body');
        table.innerHTML = ''

        console.log('Дата начала - ' + dateFrom)
        console.log('Дата конца - ' + dateTo)

        let newDate = new Date();
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

        let data = this.getOperations(period, dateFrom, dateTo);

        let currentNum = 0;
        data.then(op => {
            op.forEach(item => {
                console.log(item)
                let tr = document.createElement('tr');
                let opNum = document.createElement('td');
                opNum.innerText = ++currentNum
                opNum.setAttribute('scope', 'row')
                let opType = document.createElement('td');
                if (item.type === 'income') {
                    opType.innerText = 'доход';
                    opType.classList.add('text-success');
                } else if (item.type === 'expense') {
                    opType.innerText = 'расход';
                    opType.classList.add('text-danger');
                }
                ;
                let opCategory = document.createElement('td');
                opCategory.innerText = `${item.category}`;
                let opBalance = document.createElement('td');
                opBalance.innerText = `${item.amount}$`
                let opDate = document.createElement('td');
                let date = item.date.split('-');
                opDate.innerText = `${date[2]}.${date[1]}.${date[0]}`
                let opComment = document.createElement('td');
                opComment.innerText = item.comment;
                let opActions = document.createElement('td');

                let deleteLink = document.createElement('a');
                deleteLink.innerHTML = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 5.5C4.77614 5.5 5 5.72386 5 6V12C5 12.2761 4.77614 12.5 4.5 12.5C4.22386 12.5 4 12.2761 4 12V6C4 5.72386 4.22386 5.5 4.5 5.5Z"
                              fill="black"/>
                        <path d="M7 5.5C7.27614 5.5 7.5 5.72386 7.5 6V12C7.5 12.2761 7.27614 12.5 7 12.5C6.72386 12.5 6.5 12.2761 6.5 12V6C6.5 5.72386 6.72386 5.5 7 5.5Z"
                              fill="black"/>
                        <path d="M10 6C10 5.72386 9.77614 5.5 9.5 5.5C9.22386 5.5 9 5.72386 9 6V12C9 12.2761 9.22386 12.5 9.5 12.5C9.77614 12.5 10 12.2761 10 12V6Z"
                              fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.5 3C13.5 3.55228 13.0523 4 12.5 4H12V13C12 14.1046 11.1046 15 10 15H4C2.89543 15 2 14.1046 2 13V4H1.5C0.947715 4 0.5 3.55228 0.5 3V2C0.5 1.44772 0.947715 1 1.5 1H5C5 0.447715 5.44772 0 6 0H8C8.55229 0 9 0.447715 9 1H12.5C13.0523 1 13.5 1.44772 13.5 2V3ZM3.11803 4L3 4.05902V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V4.05902L10.882 4H3.11803ZM1.5 3V2H12.5V3H1.5Z"
                              fill="black"/></svg>`
                deleteLink.classList.add('text-decoration-none');
                deleteLink.setAttribute('data-bs-toggle', 'modal');
                deleteLink.setAttribute('data-bs-target', '#modal');
                deleteLink.id = 'operations-delete';

                let editLink = document.createElement('a');
                editLink.classList.add('ms-1')
                editLink.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1465 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447L15.8536 3.14645C16.0488 3.34171 16.0488 3.65829 15.8536 3.85355L5.85357 13.8536C5.80569 13.9014 5.74858 13.9391 5.68571 13.9642L0.68571 15.9642C0.500001 16.0385 0.287892 15.995 0.146461 15.8536C0.00502989 15.7121 -0.0385071 15.5 0.0357762 15.3143L2.03578 10.3143C2.06092 10.2514 2.09858 10.1943 2.14646 10.1464L12.1465 0.146447ZM11.2071 2.5L13.5 4.79289L14.7929 3.5L12.5 1.20711L11.2071 2.5ZM12.7929 5.5L10.5 3.20711L4.00001 9.70711V10H4.50001C4.77616 10 5.00001 10.2239 5.00001 10.5V11H5.50001C5.77616 11 6.00001 11.2239 6.00001 11.5V12H6.29291L12.7929 5.5ZM3.03167 10.6755L2.92614 10.781L1.39754 14.6025L5.21903 13.0739L5.32456 12.9683C5.13496 12.8973 5.00001 12.7144 5.00001 12.5V12H4.50001C4.22387 12 4.00001 11.7761 4.00001 11.5V11H3.50001C3.28561 11 3.10272 10.865 3.03167 10.6755Z"
                          fill="black"/>
                </svg>`
                editLink.classList.add('text-decoration-none');
                editLink.setAttribute('href', `/#/edit_operations?id=${item.id}`);
                editLink.id = 'operations-edit';

                tr.appendChild(opNum);
                tr.appendChild(opType);
                tr.appendChild(opCategory);
                tr.appendChild(opBalance);
                tr.appendChild(opDate);
                tr.appendChild(opComment);

                opActions.appendChild(deleteLink);
                opActions.appendChild(editLink);

                tr.appendChild(opActions);

                table.appendChild(tr)
            })
        });
    }

    getFormValue() {

    }

    getForm(type) {
        let category = this.getCategories(type)

        // Прячем все элементы кроме выбора типа, чтобы подгрузить категории
        // Надо подгружать категории сразу, но я не сообразила как
        this.categorySelect.classList.remove('d-none');
        this.countInput.classList.remove('d-none');
        this.dateInput.classList.remove('d-none');
        this.commentInput.classList.remove('d-none');

        // Генерируем опции для выпадающего списка в соответствии с полученными категориями

        category.then(item => {
            item.forEach(categoryItem => {
                let op = document.createElement('option');
                op.innerText = categoryItem.title;
                op.value = categoryItem.id;
                this.categorySelect.appendChild(op);
            })
        });

        // this.categorySelect.onchange = () => {
        //     console.log(this.categorySelect.value)
        // }
    }

    async createOperation() {
        let newDate = new Date();

        const category = this.categorySelect.value;
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

        try {
            const response = await CustomHttp.request(`${config.host}/operations`, 'POST', {
                type: this.typeSelect.value,
                category_id: category,
                amount: this.countInput.value,
                date: this.dateInput.value ? this.dateInput.value : `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`,
                comment: this.commentInput.value ? this.commentInput.value : '  '
            });

            // Здесь, почему-то не уходит category_id, соответственно, не работает отображение в общей таблице, через постман все уходит корректно
            // console.log(response);

            if (response && response.status === 200) {
                const result = await response.json();

                if (result && !result.error) {
                    console.log('Что-то пошло не по плану!');
                }
            }
            location.href = '/#/operations'
        } catch (error) {
            console.log(error)
        }

    }

    async getCategories(type) {
        try {
            const result = await CustomHttp.request(`${config.host}/categories/${type}`)

            // console.log(result);

            if (result) {
                if (result.error) {
                    throw new Error(result.message)
                }
            }
            ;

            return result;
        } catch (error) {
            return console.log(error)
        }
    }

    async getOperations(period, dateFrom = null, dateTo = null) {
        try {
            console.log(dateTo)
            let params = '';

            if (dateFrom === null || dateTo === null) {
                params = `?period=${period}`
            } else {
                params = `?period=interval&dateFrom=${dateFrom}&dateTo=${dateTo}`;
            }

            console.log(params)
            const result = await CustomHttp.request(`${config.host}/operations${params}`)

            if (result) {
                if (result.error) {
                    throw new Error(result.message)
                }
            }

            return result;
        } catch (error) {
            return console.log(error)
        }
    }

    async getOperation(id) {
        try {
            const result = await CustomHttp.request(`${config.host}/operations/${id}`)

            if (result) {
                if (result.error) {
                    throw new Error(result.message)
                }
            }

            return result;
        } catch (error) {
            return console.log(error)
        }
    }

    async deleteOperations(categoryId) {
        const response = await CustomHttp.request(`${config.host}/operations/${categoryId}`, 'DELETE');

        console.log(response)

        if (response && response.status === 200) {
            const result = await response.json();
            console.log(result)

            if (result && !result.error) {
                console.log('Что-то пошло не по плану!')
            }
        }
        location.reload();

        // location.href = '/#/expense';
    }

    async editOperations() {
        console.log(this.commentInput)
        const type = this.typeInput.value;

        const response = await CustomHttp.request(`${config.host}/operations`, 'POST', {
            type: this.typeInput.value,
            amount: this.countInput.value,
            date: this.dateInput.value,
            comment: this.commentInput.value,
            category_id: this.categorySelect.value
        });

        if (response && response.status === 200) {
            const result = await response.json();
            console.log(result)

            if (result && !result.error) {
                console.log('Что-то пошло не по плану!');
            }

            location.href = '/#/operations'
        }

    }

    setFiltersBtn() {

        let newDate = new Date();
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

        let btnList = [
            {
                period: 'interval',
                innerText: 'Сегодня',
                id: 'today'
            },
            {
                period: 'week',
                innerText: 'Неделя',
                id: 'week'
            },
            {
                period: 'month',
                innerText: 'Месяц',
                id: 'month'
            },
            {
                period: 'year',
                innerText: 'Год',
                id: 'year'
            },
            {
                period: 'all',
                innerText: 'Все',
                id: 'all'
            },
            {
                period: 'interval',
                innerText: 'Интервал',
                id: 'interval'
            },
        ];

        let btnGroup = document.getElementById('btn-group');
        btnList.forEach(btn => {
            // console.log('Кнопочки - ' + btn)
            let btnBlock = document.createElement('div');
            btnBlock.classList.add('btn-group');
            btnBlock.classList.add('mr-2');
            btnBlock.setAttribute('role', 'group');

            let btnItem = document.createElement('button');
            btnItem.setAttribute('type', 'button');
            btnItem.classList.add('btn');
            btnItem.classList.add('btn-outline-secondary');
            btnItem.innerText = btn.innerText;
            btnItem.id = btn.id;

            btnBlock.appendChild(btnItem);
            btnGroup.appendChild(btnBlock);

            btnItem.onclick = () => {
                btnList.forEach(item => {
                    document.getElementById(item.id).classList.remove('btn-secondary');
                    document.getElementById(item.id).classList.add('btn-outline-secondary');
                });

                btnItem.classList.remove('btn-outline-secondary');
                btnItem.classList.add('btn-secondary');

                this.dateTo = null;
                this.dateFrom = null;

                if (btnItem.id === 'today') {
                    this.dateTo = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
                    this.dateFrom = currentDate;
                    this.period = 'interval';
                } else if (btnItem.id === 'interval') {
                    this.period = 'interval';
                    let intervalBlock = document.getElementById('interval-block');
                    let dateFromInput = document.getElementById('dateFrom');
                    let dateToInput = document.getElementById('dateTo');

                    intervalBlock.classList.remove('d-none');
                    intervalBlock.classList.add('d-flex');

                    dateFromInput.onchange = () => {
                        // dateToInput.style.display = 'block';
                        this.dateFrom = dateFromInput.value;
                        console.log(this.dateFrom)
                    }

                    dateToInput.onchange = () => {
                        this.dateTo = dateToInput.value;
                        console.log(this.dateTo)
                        if (this.dateFrom && this.dateTo) {
                            this.getTable('interval', this.dateFrom, this.dateTo);
                        }
                    }
                } else if (btnItem.id === 'week') {
                    this.period = 'week';
                } else if (btnItem.id === 'month') {
                    this.period = 'month';
                } else if (btnItem.id === 'year') {
                    this.period = 'year';
                } else if (btnItem.id === 'all') {
                    this.period = 'all'
                }

                this.getTable(this.period, this.dateFrom, this.dateTo);
            }
        });
    }
}
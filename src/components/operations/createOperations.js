import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from '../../services/balance.js';

import {Operations} from './operations.js';
import {Categories} from '../category/categories.js';

export class CreateOperations extends Operations{
    constructor() {
        super();
        this.period = 'all';


        this.type = null;
        this.category = null;
        this.count = null;
        this.date = null;
        this.comment = null;

        this.currentIdCategory = null;

        this.init();
    }

    init() {
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
                this.createOperation(this.categorySelect.value);
            } else if (!this.countInput.value) {
                this.categoryValueError.classList.remove('d-none');
                this.categoryValueError.classList.add('d-block');
            } else if (!this.countInput.value.match(this.categoryRegex)) {
                this.categoryRegexError.classList.remove('d-none');
                this.categoryRegexError.classList.add('d-block');
            }
        }
    }

    getForm(type) {
        let category = Categories.getCategories(type)

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

    async createOperation(category) {
        let newDate = new Date();

        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

        try {
            const response = await CustomHttp.request(`${config.host}/operations`, 'POST', {
                type: this.typeSelect.value,
                category_id: Number(category),
                amount: this.countInput.value,
                date: this.dateInput.value ? this.dateInput.value : `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`,
                comment: this.commentInput.value ? this.commentInput.value : 'Новая операция'
            });

            if (response && response.status === 200) {
                const result = await response.json();

                if (result && !result.error) {
                    console.log('Что-то пошло не по плану!');
                }
            }

            await Balance.getBalance();
            location.href = '/#/operations'
        } catch (error) {
            console.log(error)
        }
    }
}
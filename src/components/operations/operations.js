import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from '../../services/balance.js';

export class Operations {
    constructor() {

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

    async deleteOperations(id) {
        const response = await CustomHttp.request(`${config.host}/operations/${id}`, 'DELETE');

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

    async editOperations(id) {
        let newDate = new Date();
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;

        try {
            const response = await CustomHttp.request(`${config.host}/operations/${id}`, 'PUT', {
                type: this.typeInput.id,
                amount: this.countInput.value,
                category_id: Number(this.categorySelect.value),
                date: this.dateInput.value ? this.dateInput.value : `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`,
                comment: this.commentInput.value ? this.commentInput.value : 'Новая операция'
            });

            if (response && response.status === 200) {
                const result = await response.json();

                if (result && !result.error) {
                    console.log('Что-то пошло не по плану!');
                }
            }

            location.href = '/#/operations'
        } catch (e) {
            alert('Такая запись уже существует!')
        }
    }
}
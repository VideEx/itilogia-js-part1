import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from '../../services/balance.js';

import {Categories} from '../category/categories.js'
import {Operations} from './operations.js'

export class EditOperations extends Operations {
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
        const params = window.location.hash.split('?')[1].split('=')[1];
        this.operation = this.getOperation(params);

        this.typeInput = document.getElementById('inputType');
        this.countInput = document.getElementById('inputCount');
        this.dateInput = document.getElementById('inputDate');
        this.commentInput = document.getElementById('inputComment');
        this.editElement = document.getElementById('edit-btn');

        this.categorySelect = document.getElementById('inputCategory')

        const data = this.operation.then(item => {
            item.type === 'income' ? this.typeInput.value = 'Доход' : this.typeInput.value = 'Расход';
            this.typeInput.id = item.type;
            this.countInput.value = item.amount;
            this.dateInput.value = item.date;
            this.commentInput.value = item.comment;


            const categories = Categories.getCategories(item.type);
            categories.then(item => {

                console.log(categories)

                item.forEach(categoryItem => {
                    let op = document.createElement('option');
                    op.innerText = categoryItem.title;
                    op.value = categoryItem.id;

                    if (categoryItem === item.category) {
                        op.setAttribute('selected', 'true')
                    }

                    this.categorySelect.appendChild(op);
                })
            })
        })

        this.typeInput.setAttribute('disabled', true)

        this.editElement.onclick = () => {
            let id = window.location.hash.split('=')[1].split('&')[0];
            this.editOperations(id);
        };
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

            await Balance.getBalance();
            location.href = '/#/operations'
        } catch (e) {
            alert('Такая запись уже существует!')
        }
    }
}
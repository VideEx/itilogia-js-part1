import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from '../../services/balance.js';

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


            const categories = this.getCategories(item.type);
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
}
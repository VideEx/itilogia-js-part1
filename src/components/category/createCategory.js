import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from "../../services/balance.js";

import {Categories} from './categories.js'

export class CreateCategory extends Categories {
    constructor(category) {
        super();
        this.category = category;

        this.init();
    }

    init() {
        this.categoryTitle = null;
        this.categoryRegex = /[А-Яа-яЁё]{2,3}/g;

        this.submit = document.getElementById('create-category-btn');

        this.submit.onclick = (e) => {
            e.preventDefault();
            if (this.validField(this.category)) {
                this.createCategory(this.category).then();
            }
        };
    };

    // создание категории
    async createCategory(category) {
        try {
            const response = await CustomHttp.request(`${config.host}/categories/${category}`, 'POST', {
                title: this.categoryTitle,
            });

            if (response && response.status === 200) {
                const result = await response.json();

                if (result && !result.error) {
                    console.log('Что-то пошло не по плану!')
                }
            }

            location.href = `/#/${this.category}`
        } catch (error) {
            alert('Такая категория уже создана, измените название!')
            console.log(error)
        }
    }

}
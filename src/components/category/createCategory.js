import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";


import {Categories} from './categories.js'

export class CreateCategory extends Categories {
    constructor(category) {
        super();
        this.category = category;
        this.categoriesList = Categories.getCategories;

        this.init();
    }

    init() {
        this.categoryTitle = null;
        this.categoryRegex = /[А-Яа-яЁё]{2,3}/g;

        this.submit = document.getElementById('create-category-btn');

        this.submit.onclick = (e) => {
            e.preventDefault();
            this.validField(this.category, 'create');
        };
    };
}
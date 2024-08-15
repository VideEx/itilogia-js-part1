import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";

import {Categories} from './categories.js'

export class EditCategory extends Categories {
    constructor(category) {
        super();
        this.category = category;
        this.categoriesList = Categories.getCategories;

        this.init();
    }

    init() {
        let titleInput = document.getElementById('category-input');
        this.categoryRegex = /[А-Яа-яЁё]{2,3}/g;
        let editBtn = document.getElementById('save-btn');
        let titleValue = sessionStorage.getItem('title')
        console.log(titleValue)
        titleInput.value = titleValue;
        console.log(editBtn)
        editBtn.onclick = (e) => {
            e.preventDefault();
            sessionStorage.removeItem('title')
            // this.editCategory(id, value)
            this.validField(this.category, 'edit');
        }
    };




}
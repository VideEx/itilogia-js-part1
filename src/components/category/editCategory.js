import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {UrlManager} from "../../utilities/url-manager.js";

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
            e.preventDefault();
            if (this.validField(this.category)) {
                const queryParams = UrlManager.getQueryParams();
                this.editCategory(queryParams.id, titleValue).then();
            }
        }
    };

    // изменение категории
    async editCategory(id, value) {
        const response = await CustomHttp.request(`${config.host}/categories/${this.category}/${id}`, 'PUT', {
            title: value,
        });

        if (response && response.status === 200) {
            const result = await response.json();
            console.log(result)

            if (result && !result.error) {
                console.log('Что-то пошло не по плану!')
            }
        }
        location.href = `/#/${this.category}`
    };
}
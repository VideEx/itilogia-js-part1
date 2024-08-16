import {Balance} from "../../services/balance.js";
import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";

export class Categories {
    constructor() {

    }

    // Валидация полей
    validField(category) {
        this.categoryField = document.getElementById('category-input');
        this.categoryValueError = document.getElementById('valueError');
        this.categoryRegexError = document.getElementById('regexError');

        this.categoryValueError.classList.remove('d-block');
        this.categoryRegexError.classList.remove('d-block');

        if (this.categoryField.value && this.categoryField.value.match(this.categoryRegex)) {
            this.categoryTitle = this.categoryField.value;
            return true;
        }
        if (!this.categoryField.value) {
            this.categoryValueError.classList.remove('d-none');
            this.categoryValueError.classList.add('d-block');
            return true;
        }
        if (!this.categoryField.value.match(this.categoryRegex)) {
            this.categoryRegexError.classList.remove('d-none');
            this.categoryRegexError.classList.add('d-block');
            return true;
        }
    }
    //
    // // Валидация полей
    // validField(category, type) {
    //     this.categoryField = document.getElementById('category-input');
    //     this.categoryValueError = document.getElementById('valueError');
    //     this.categoryRegexError = document.getElementById('regexError');
    //
    //     this.categoryValueError.classList.remove('d-block');
    //     this.categoryRegexError.classList.remove('d-block');
    //
    //     if (this.categoryField.value && this.categoryField.value.match(this.categoryRegex)) {
    //         this.categoryTitle = this.categoryField.value;
    //
    //         if (type == 'create') {
    //             this.createCategory(category);
    //         } else if (type === 'edit') {
    //             let id = window.location.hash.split('=')[1].split('&')[0];
    //             this.editCategory(id, this.categoryTitle)
    //         }
    //     } else if (!this.categoryField.value) {
    //         this.categoryValueError.classList.remove('d-none');
    //         this.categoryValueError.classList.add('d-block');
    //     } else if (!this.categoryField.value.match(this.categoryRegex)) {
    //         this.categoryRegexError.classList.remove('d-none');
    //         this.categoryRegexError.classList.add('d-block');
    //     }
    // }

    // получение категории
    async getCategories(category) {
        try {
            const result = await CustomHttp.request(`${config.host}/categories/${category}`)

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
}
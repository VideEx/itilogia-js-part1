import {Balance} from "../../services/balance.js";
import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";

export class Categories {
    constructor() {

    }

    // Валидация полей
    validField(category, type) {
        this.categoryField = document.getElementById('category-input');
        this.categoryValueError = document.getElementById('valueError');
        this.categoryRegexError = document.getElementById('regexError');

        this.categoryValueError.classList.remove('d-block');
        this.categoryRegexError.classList.remove('d-block');

        if (this.categoryField.value && this.categoryField.value.match(this.categoryRegex)) {
            this.categoryTitle = this.categoryField.value;

            if (type == 'create') {
                this.createCategory(category);
            } else if (type === 'edit') {
                let id = window.location.hash.split('=')[1].split('&')[0];
                this.editCategory(id, this.categoryTitle)
            }
        } else if (!this.categoryField.value) {
            this.categoryValueError.classList.remove('d-none');
            this.categoryValueError.classList.add('d-block');
        } else if (!this.categoryField.value.match(this.categoryRegex)) {
            this.categoryRegexError.classList.remove('d-none');
            this.categoryRegexError.classList.add('d-block');
        }
    }

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

    // удаление категории
    async deleteCategory(categoryId) {
        const response = await CustomHttp.request(`${config.host}/categories/${this.category}/${categoryId}`, 'DELETE');

        if (response && response.status === 200) {
            const result = await response.json();
            console.log(result)

            if (result && !result.error) {
                console.log('Что-то пошло не по плану!')
            }
        }
        location.reload();
    }

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
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class Categories {
    constructor(category) {
        this.balance = new Balance;
        this.currentBalance = this.balance.getBalance();
        this.category = category;
        this.categoriesList = this.getCategories();
        this.urlRoute = window.location.hash.split('?')[0];

        console.log(category)

        this.init();
    }

    init() {
        if (this.urlRoute === `#/${this.category}`) {
            this.categoriesBlock = document.getElementById('categories');

            this.categoriesList.then(item => {
                console.log(item)
                item.forEach(categoryItem => {
                    let card = document.createElement('div');
                    card.classList.add('card');
                    card.setAttribute('id', categoryItem.id);

                    let cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');
                    let title = document.createElement('h5');
                    title.classList.add('card-title');
                    title.innerText = categoryItem.title;
                    let confirmLink = document.createElement('button');
                    confirmLink.classList.add('btn');
                    confirmLink.classList.add('btn-primary');
                    confirmLink.classList.add('me-1');
                    confirmLink.innerText = 'Редактировать';
                    let deleteLink = document.createElement('button');
                    deleteLink.setAttribute('data-bs-toggle', 'modal');
                    deleteLink.setAttribute('data-bs-target', '#modal');
                    deleteLink.classList.add('btn');
                    deleteLink.classList.add('btn-danger');
                    deleteLink.innerText = 'Удалить';

                    cardBody.appendChild(title);
                    cardBody.appendChild(confirmLink);
                    cardBody.appendChild(deleteLink);
                    card.appendChild(cardBody);
                    this.categoriesBlock.prepend(card);

                    deleteLink.onclick = () => {
                        console.log('sjdnk');
                        this.showDeleteModal(card.id);
                    };

                    console.log(confirmLink)

                    confirmLink.onclick = () => {
                        console.log('edit');

                        location.href = `/#/edit_${this.category}?id=${card.id}`
                        sessionStorage.setItem('title', categoryItem.title)
                    };
                })
            });
        } else if (this.urlRoute === `#/edit_${this.category}`) {
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
                this.validField('edit');
            }
        } else if (this.urlRoute === `#/create_${this.category}`) {
            this.categoryTitle = null;
            // this.categoryRegex = /[A-Za-zА-Яа-яЁё]{2,3}/g;
            this.categoryRegex = /[А-Яа-яЁё]{2,3}/g;

            this.submit = document.getElementById('create-category-btn');

            // this.category = category;

            console.log(this.submit)
            console.log('dljcndjkn')
            this.submit.onclick = (e) => {
                e.preventDefault();
                this.validField('create');
            };
        }
    };

    showDeleteModal(id) {
        let deleteBtn = document.getElementById('delete-category');

        deleteBtn.onclick = () => {
            this.deleteCategory(id);
        }
    }

    validField(type) {
        this.categoryField = document.getElementById('category-input');
        this.categoryValueError = document.getElementById('valueError');
        this.categoryRegexError = document.getElementById('regexError');

        this.categoryValueError.classList.remove('d-block');
        this.categoryRegexError.classList.remove('d-block');

        if (this.categoryField.value && this.categoryField.value.match(this.categoryRegex)) {
            this.categoryTitle = this.categoryField.value;
            console.log('sdkjcndsj')
            if (type == 'create') {
                this.createCategory();
            } else if (type === 'edit') {
                let id = window.location.hash.split('=')[1].split('&')[0]
                // let value = titleInput.value;

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
    async createCategory() {
        try {
            const response = await CustomHttp.request(`${config.host}/categories/${this.category}`, 'POST', {
                title: this.categoryTitle,
            });

            if (response && response.status === 200) {
                const result = await response.json();
                console.log(result)

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
    }

    // удаление категории
    async deleteCategory(categoryId) {
        const response = await CustomHttp.request(`${config.host}/categories/${this.category}/${categoryId}`, 'DELETE');

        console.log(response)

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

    // получение категории
    async getCategories() {
        try {
            const result = await CustomHttp.request(`${config.host}/categories/${this.category}`)

            console.log(result);

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
}
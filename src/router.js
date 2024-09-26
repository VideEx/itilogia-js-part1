import {Form} from "./components/form.js";
import {Main} from "./components/main.js";
import {Auth} from "./services/auth.js";
import {GetOperations} from "./components/operations/getOperations.js";
import {EditOperations} from "./components/operations/editOperations.js";
import {CreateOperations} from "./components/operations/createOperations.js";

import {GetCategories} from "./components/category/getCategories.js";
import {EditCategory} from "./components/category/editCategory.js";
import {CreateCategory} from "./components/category/createCategory.js";
import {Balance} from "./services/balance.js";

export class Router {
    constructor() {
        // let balance = new Balance();

        this.sidebar = document.getElementById('sidebar');

        this.content = document.getElementById('content');

        this.pageTitle = document.getElementById('page');

        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'template/main.html',
                load: () => {
                    new Main();
                }
            },
            {
                route: '#/signup',
                title: 'Регистрация',
                template: 'template/signup.html',
                load: () => {
                    new Form('signup');
                    console.log('sdlskc');
                }
            },
            {
                route: '#/login',
                title: 'Вход в систему',
                template: 'template/login.html',
                load: () => {
                    new Form('login');
                }
            },
            {
                route: '#/logout',
                title: 'Выход',
                template: 'template/login.html',
                load: () => {

                }
            },
            {
                route: '#/operations',
                title: 'Все категории',
                template: 'template/operations.html',
                load: () => {
                    new GetOperations();
                }
            },
            {
                route: '#/create_operations',
                title: 'Создание дохода/расхода',
                template: 'template/create_operation.html',
                load: () => {
                    new CreateOperations()
                }
            },
            {
                route: '#/edit_operations',
                title: 'Изменение операции',
                template: 'template/edit_operations.html',
                load: () => {
                    new EditOperations();
                }
            },
            {
                route: '#/income',
                title: 'Доходы',
                template: 'template/income/categories.html',
                load: () => {
                    new GetCategories('income');
                }
            },
            {
                route: '#/edit_income',
                title: 'Доходы',
                template: 'template/income/edit_category.html',
                load: () => {
                    new EditCategory('income');
                }
            },
            {
                route: '#/create_income',
                title: 'Доходы',
                template: 'template/income/create_category.html',
                load: () => {
                    new CreateCategory('income');
                }
            },
            {
                route: '#/expense',
                title: 'Расходы',
                template: 'template/expenses/categories.html',
                load: () => {
                    new GetCategories('expense');
                }
            },
            {
                route: '#/edit_expense',
                title: 'Расходы',
                template: 'template/expenses/edit_category.html',
                load: () => {
                    new EditCategory('expense');
                }
            },
            {
                route: '#/create_expense',
                title: 'Расходы',
                template: 'template/expenses/create_category.html',
                load: () => {
                    new CreateCategory('expense');
                }
            },
        ]
    };

    async openRoute() {

        const urlRoute = window.location.hash.split('?')[0];

        if (urlRoute === '#/logout') {
            await Auth.logout();
            window.location.href = '#/login';
            return;
        }

        const newRoute = this.routes.find(item => {
            return item.route === urlRoute;
        });

        if (!newRoute) {
            console.log(newRoute)
            window.location.href = '#/login'
            return;
        }

        if (urlRoute !== '#/login' && urlRoute !== '#/signup') {
            this.sidebar.classList.remove('d-none');
            this.sidebar.classList.add('d-flex');
            this.content.classList.add('main-category-block');
            if (!this.sidebar.innerHTML) {

                this.sidebar.innerHTML = await fetch('template/sidebar.html').then(response => response.text());
                await Balance.getBalance();

                this.userInfo = document.getElementById('username');
                this.userInfo.innerText = `${this.getUserInfo().name} ${this.getUserInfo().lastName}`;
            }
        } else {
            this.sidebar.classList.add('d-none');
            this.content.classList.remove('main-category-block');
        }

        this.content.innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        this.pageTitle.innerText = newRoute.title;

        newRoute.load();
    }

    getUserInfo() {
        const userInfo = localStorage.getItem('userInfo');
        console.log(userInfo)
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    };

    async getData() {
        console.log('djk')
    };
}


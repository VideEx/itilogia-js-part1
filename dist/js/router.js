import {Form} from "./components/form.js";
import {Auth} from "./services/auth.js";
// import {Test} from "./components/test.js";
// import {Result} from "./components/result.js";
// import {RightResult} from "./components/right-result.js";


export class Router {
    constructor() {
        this.sidebar = document.getElementById('sidebar');

        this.content = document.getElementById('content');

        this.pageTitle = document.getElementById('page');

        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'template/main.html',
                load: () => {

                }
            },
            {
                route: '#/singin',
                title: 'Регистрация',
                template: 'template/singin.html',
                load: () => {
                    new Form('singin');
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
                route: '#/all_category',
                title: 'Все категории',
                template: 'template/all_category.html',
                load: () => {

                }
            },
            {
                route: '#/create_category',
                title: 'Создание категории',
                template: 'template/create_new_change.html',
                load: () => {

                }
            },
            {
                route: '#/edit_category',
                title: 'Изменение категории',
                template: 'template/edit_change.html',
                load: () => {

                }
            },
            {
                route: '#/income',
                title: 'Доходы',
                template: 'template/income/categories.html',
                load: () => {

                }
            },
            {
                route: '#/expenses',
                title: 'Расходы',
                template: 'template/expenses/categories.html',
                load: () => {

                }
            },
        ]
    };

    async openRoute() {

        const urlRoute = window.location.hash.split('?')[0];
        // if (urlRoute === '#/logout') {
        //     await Auth.logout();
        //     window.location.href = '#/';
        //     return;
        // }

        const newRoute = this.routes.find(item => {
            return item.route === urlRoute;
        });

        if (!newRoute) {
            window.location.href = '#/login'
            return;
        }

        if (urlRoute !== '#/login' && urlRoute !== '#/singin') {
            this.sidebar.classList.add('d-flex');
            this.sidebar.innerHTML =  await fetch('template/sidebar.html').then(response => response.text());
        } else {
            this.sidebar.classList.add('d-none');
        }

        this.content.innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        this.pageTitle.innerText = newRoute.title;

        // const userInfo = Auth.getUserInfo();
        // const accessToken = localStorage.getItem(Auth.accessTokenKey);

        newRoute.load();
    }
}


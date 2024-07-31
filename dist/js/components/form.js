import {CustomHttp} from "../services/custom-http.js";
import {Auth} from "../services/auth.js";
// import config from "../../config/config.js";

export class Form {

    constructor(page) {
        this.processElement = null;
        this.agreeElement = null;
        this.page = page;

        const accessToken = localStorage.getItem(Auth.accessTokenKey);
        if (accessToken) {
            location.href = '#/';
            return;
        }

        this.userData = {
            name: null,
            lastName: null,
            email: null
        };
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                valid: false
            },
        ];

        if (this.page === "signin") {
            this.fields.unshift(
                {
                    name: 'name',
                    id: 'name',
                    element: null,
                    regex: /^[А-Я][а-я]+\s*$/,
                    valid: false
                },
                {
                    name: 'lastName',
                    id: 'last-name',
                    element: null,
                    regex: /^[А-Я][а-я]+\s*$/,
                    valid: false
                },
                {
                    name: 'repeatPassword',
                    id: 'repeat-password',
                    element: null,
                    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    valid: false
                });
        }

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this)
            };
        });
        this.processElement = document.getElementById('process');
        this.processElement.onclick = function () {
            that.processForm();
        };

        if (this.page === "signin") {
            this.agreeElement = document.getElementById('agree');
            this.agreeElement.onchange = function () {
                that.validateForm();
            }
        }
    }

    validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
            element.parentNode.style.borderColor = "red";
            field.valid = false;
        } else {
            element.parentNode.removeAttribute('style');
            field.valid = true;
        }
        this.validateForm();
    };

    validateForm() {
        const validForm = this.fields.every(item => item.valid);
        const isValid = this.agreeElement ? this.agreeElement.checked && validForm : validForm;
        console.log(validForm);
        if (isValid) {
            this.processElement.removeAttribute('disabled')
        } else {
            this.processElement.setAttribute('disabled', "")
        }
        return isValid;
    };

    async processForm() {
        if (this.validateForm()) {

            const email = this.fields.find(item => item.name === 'email').element.value;
            const password = this.fields.find(item => item.name === 'password').element.value;

            if (this.page === 'signin') {
                try {

                    const result = await CustomHttp.request('http://localhost:3000/api/signup', 'POST', {
                        name: this.fields.find(item => item.name === 'name').element.value.split(' ')[1],
                        lastName: this.fields.find(item => item.name === 'lastName').element.value.split(' ')[0],
                        email: email,
                        password: password,
                        repeatPassword: repeatPassword
                    });

                    if (result) {
                        if (result.error || !result.user) {
                            throw new Error(result.message)
                        }
                    }
                } catch (error) {
                    return console.log(error)
                }
            }

            try {
                const result = await CustomHttp.request('http://localhost:3000/api/login', 'POST', {
                    email: email,
                    password: password,
                })

                if (result) {
                    console.log(result)
                    if (result.error || !result.accessToken || !result.refreshToken || !result.fullName || !result.userId) {
                        throw new Error(result.message)
                    }

                    console.log(result);

                    Auth.setTokens(result.accessToken, result.refreshToken);
                    Auth.setUserInfo({
                        fullName: result.fullName,
                        userId: result.userId,
                        email: email
                    });
                    
                    location.href = '#/'
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

}

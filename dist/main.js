/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\nclass App {\r\n    constructor() {\r\n\r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        window.addEventListener('DOMContentLoaded', this.handleRouterChanging.bind(this));\r\n        window.addEventListener('popstate', this.handleRouterChanging.bind(this));\r\n    }\r\n\r\n    handleRouterChanging() {\r\n        this.router.openRoute();\r\n    }\r\n}\r\n\r\n(new App());\r\n\r\n// import {Chart} from \"../js/chart.min.js\";\r\n//\r\n// let incomeData = [\r\n//     {\r\n//         value: 20,\r\n//         color: \"rgba(220, 53, 69, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(32, 201, 151, 1)\"\r\n//     },\r\n//     {\r\n//         value: 10,\r\n//         color: \"rgba(13, 110, 253, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(255, 193, 7, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(253, 126, 20, 1)\"\r\n//     }\r\n// ];\r\n//\r\n// let incomeOptions = {\r\n//     segmentShowStroke: false,\r\n//     animateScale: true,\r\n//     legend: {\r\n//         display: true,\r\n//         position: 'top',\r\n//         labels: {\r\n//             fontColor: 'black',\r\n//             fontFamily: 'Calibri Light',\r\n//             fontStyle: 'italic'\r\n//         }\r\n//     }\r\n// }\r\n//\r\n// let income = document.getElementById(\"income\").getContext(\"2d\");\r\n//\r\n// new Chart(income).Pie(incomeData, incomeOptions);\r\n//\r\n// let expensesData = [\r\n//     {\r\n//         value: 20,\r\n//         color: \"rgba(220, 53, 69, 1)\"\r\n//     },\r\n//     {\r\n//         value: 10,\r\n//         color: \"rgba(13, 110, 253, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(255, 193, 7, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(32, 201, 151, 1)\"\r\n//     },\r\n//     {\r\n//         value: 30,\r\n//         color: \"rgba(253, 126, 20, 1)\"\r\n//     }\r\n// ];\r\n//\r\n// let expensesOptions = {\r\n//     segmentShowStroke: false,\r\n//     animateScale: true,\r\n//     options: {\r\n//         aspectRatio: 2,\r\n//         plugins: {\r\n//             legend: {\r\n//                 display: true,\r\n//                 position: 'left',\r\n//                 reverse: true, // Reverse order of legend labels\r\n//                 title: {\r\n//                     display: true,\r\n//                     text: 'Number of Days',\r\n//                     font: {\r\n//                         size: 14,\r\n//                         weight: 'bold'\r\n//                     },\r\n//                     padding: 20,\r\n//                     color: 'green'\r\n//                 }\r\n//             }\r\n//         }\r\n//     }\r\n// }\r\n//\r\n// let expenses = document.getElementById(\"expenses\").getContext(\"2d\");\r\n//\r\n// new Chart(expenses).Pie(expensesData, expensesOptions);\r\n\r\n// const ctx = document.getElementById('income');\r\n//\r\n// new Chart(ctx, {\r\n//     type: 'pie',\r\n//     data: {\r\n//         labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],\r\n//         datasets: [{\r\n//             label: 'Рублей',\r\n//             data: incomeData,\r\n//         }]\r\n//     },\r\n// });\r\n// const ctx1 = document.getElementById('expenses');\r\n//\r\n// new Chart(ctx1, {\r\n//     type: 'pie',\r\n//     data: {\r\n//         labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],\r\n//         datasets: [{\r\n//             label: 'Рублей',\r\n//             data: expensesData,\r\n//         }]\r\n//     },\r\n// });\n\n//# sourceURL=webpack://module10_project/./src/app.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/custom-http.js */ \"./src/services/custom-http.js\");\n/* harmony import */ var _services_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.js */ \"./src/services/auth.js\");\n\r\n\r\n// import config from \"../../config/config.js\";\r\n\r\nclass Form {\r\n\r\n    constructor(page) {\r\n        this.processElement = null;\r\n        this.agreeElement = null;\r\n        this.page = page;\r\n\r\n        const accessToken = localStorage.getItem(_services_auth_js__WEBPACK_IMPORTED_MODULE_1__.Auth.accessTokenKey);\r\n        if (accessToken) {\r\n            location.href = '#/';\r\n            return;\r\n        }\r\n\r\n        this.userData = {\r\n            name: null,\r\n            lastName: null,\r\n            email: null\r\n        };\r\n        this.fields = [\r\n            {\r\n                name: 'email',\r\n                id: 'email',\r\n                element: null,\r\n                regex: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\r\n                valid: false\r\n            },\r\n            {\r\n                name: 'password',\r\n                id: 'password',\r\n                element: null,\r\n                regex: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/,\r\n                valid: false\r\n            },\r\n        ];\r\n\r\n        if (this.page === \"signin\") {\r\n            this.fields.unshift(\r\n                {\r\n                    name: 'name',\r\n                    id: 'name',\r\n                    element: null,\r\n                    regex: /^[А-Я][а-я]+\\s*$/,\r\n                    valid: false\r\n                },\r\n                {\r\n                    name: 'lastName',\r\n                    id: 'last-name',\r\n                    element: null,\r\n                    regex: /^[А-Я][а-я]+\\s*$/,\r\n                    valid: false\r\n                },\r\n                {\r\n                    name: 'repeatPassword',\r\n                    id: 'repeat-password',\r\n                    element: null,\r\n                    regex: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/,\r\n                    valid: false\r\n                });\r\n        }\r\n\r\n        const that = this;\r\n        this.fields.forEach(item => {\r\n            item.element = document.getElementById(item.id);\r\n            item.element.onchange = function () {\r\n                that.validateField.call(that, item, this)\r\n            };\r\n        });\r\n        this.processElement = document.getElementById('process');\r\n        this.processElement.onclick = function () {\r\n            that.processForm();\r\n        };\r\n\r\n        if (this.page === \"signin\") {\r\n            this.agreeElement = document.getElementById('agree');\r\n            this.agreeElement.onchange = function () {\r\n                that.validateForm();\r\n            }\r\n        }\r\n    }\r\n\r\n    validateField(field, element) {\r\n        if (!element.value || !element.value.match(field.regex)) {\r\n            element.parentNode.style.borderColor = \"red\";\r\n            field.valid = false;\r\n        } else {\r\n            element.parentNode.removeAttribute('style');\r\n            field.valid = true;\r\n        }\r\n        this.validateForm();\r\n    };\r\n\r\n    validateForm() {\r\n        const validForm = this.fields.every(item => item.valid);\r\n        const isValid = this.agreeElement ? this.agreeElement.checked && validForm : validForm;\r\n        console.log(validForm);\r\n        if (isValid) {\r\n            this.processElement.removeAttribute('disabled')\r\n        } else {\r\n            this.processElement.setAttribute('disabled', \"\")\r\n        }\r\n        return isValid;\r\n    };\r\n\r\n    async processForm() {\r\n        if (this.validateForm()) {\r\n\r\n            const email = this.fields.find(item => item.name === 'email').element.value;\r\n            const password = this.fields.find(item => item.name === 'password').element.value;\r\n\r\n            if (this.page === 'signin') {\r\n                try {\r\n\r\n                    const result = await _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__.CustomHttp.request('http://localhost:3000/api/signup', 'POST', {\r\n                        name: this.fields.find(item => item.name === 'name').element.value.split(' ')[1],\r\n                        lastName: this.fields.find(item => item.name === 'lastName').element.value.split(' ')[0],\r\n                        email: email,\r\n                        password: password,\r\n                        repeatPassword: repeatPassword\r\n                    });\r\n\r\n                    if (result) {\r\n                        if (result.error || !result.user) {\r\n                            throw new Error(result.message)\r\n                        }\r\n                    }\r\n                } catch (error) {\r\n                    return console.log(error)\r\n                }\r\n            }\r\n\r\n            try {\r\n                const result = await _services_custom_http_js__WEBPACK_IMPORTED_MODULE_0__.CustomHttp.request('http://localhost:3000/api/login', 'POST', {\r\n                    email: email,\r\n                    password: password,\r\n                })\r\n\r\n                if (result) {\r\n                    console.log(result)\r\n                    if (result.error || !result.accessToken || !result.refreshToken || !result.fullName || !result.userId) {\r\n                        throw new Error(result.message)\r\n                    }\r\n\r\n                    console.log(result);\r\n\r\n                    _services_auth_js__WEBPACK_IMPORTED_MODULE_1__.Auth.setTokens(result.accessToken, result.refreshToken);\r\n                    _services_auth_js__WEBPACK_IMPORTED_MODULE_1__.Auth.setUserInfo({\r\n                        fullName: result.fullName,\r\n                        userId: result.userId,\r\n                        email: email\r\n                    });\r\n                    \r\n                    location.href = '#/'\r\n                }\r\n            } catch (error) {\r\n                console.log(error)\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://module10_project/./src/components/form.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form.js */ \"./src/components/form.js\");\n/* harmony import */ var _services_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.js */ \"./src/services/auth.js\");\n\r\n\r\n// import {Test} from \"./components/test.js\";\r\n// import {Result} from \"./components/result.js\";\r\n// import {RightResult} from \"./components/right-result.js\";\r\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.sidebar = document.getElementById('sidebar');\r\n\r\n        this.content = document.getElementById('content');\r\n\r\n        this.pageTitle = document.getElementById('page');\r\n\r\n        this.routes = [\r\n            {\r\n                route: '#/',\r\n                title: 'Главная',\r\n                template: 'template/main.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/singin',\r\n                title: 'Регистрация',\r\n                template: 'template/singin.html',\r\n                load: () => {\r\n                    new _components_form_js__WEBPACK_IMPORTED_MODULE_0__.Form('singin');\r\n                    console.log('sdlskc');\r\n                }\r\n            },\r\n            {\r\n                route: '#/login',\r\n                title: 'Вход в систему',\r\n                template: 'template/login.html',\r\n                load: () => {\r\n                    new _components_form_js__WEBPACK_IMPORTED_MODULE_0__.Form('login');\r\n                }\r\n            },\r\n            {\r\n                route: '#/all_category',\r\n                title: 'Все категории',\r\n                template: 'template/all_category.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/create_category',\r\n                title: 'Создание категории',\r\n                template: 'template/create_new_change.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/edit_category',\r\n                title: 'Изменение категории',\r\n                template: 'template/edit_change.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/income',\r\n                title: 'Доходы',\r\n                template: 'template/income/categories.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n            {\r\n                route: '#/expenses',\r\n                title: 'Расходы',\r\n                template: 'template/expenses/categories.html',\r\n                load: () => {\r\n\r\n                }\r\n            },\r\n        ]\r\n    };\r\n\r\n    async openRoute() {\r\n\r\n        const urlRoute = window.location.hash.split('?')[0];\r\n        // if (urlRoute === '#/logout') {\r\n        //     await Auth.logout();\r\n        //     window.location.href = '#/';\r\n        //     return;\r\n        // }\r\n\r\n        const newRoute = this.routes.find(item => {\r\n            return item.route === urlRoute;\r\n        });\r\n\r\n        if (!newRoute) {\r\n            window.location.href = '#/login'\r\n            return;\r\n        }\r\n\r\n        if (urlRoute !== '#/login' && urlRoute !== '#/singin') {\r\n            this.sidebar.classList.add('d-flex');\r\n            this.sidebar.innerHTML =  await fetch('template/sidebar.html').then(response => response.text());\r\n        } else {\r\n            this.sidebar.classList.add('d-none');\r\n        }\r\n\r\n        this.content.innerHTML =\r\n            await fetch(newRoute.template).then(response => response.text());\r\n        this.pageTitle.innerText = newRoute.title;\r\n\r\n        // const userInfo = Auth.getUserInfo();\r\n        // const accessToken = localStorage.getItem(Auth.accessTokenKey);\r\n\r\n        newRoute.load();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://module10_project/./src/router.js?");

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Auth: () => (/* binding */ Auth)\n/* harmony export */ });\n// import config from \"../../config/config.js\";\r\n\r\nclass Auth {\r\n    static accessTokenKey = 'accessToken';\r\n    static refreshTokenKey = 'refreshToken';\r\n    static userInfoKey = 'userInfo';\r\n\r\n    static async processUnauthorizedResponse() {\r\n        const refreshToken = localStorage.getItem(this.refreshTokenKey);\r\n\r\n        if (refreshToken) {\r\n            const response = await fetch('http://localhost:3000/api' + '/refresh', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-type': 'application/json',\r\n                    'Accept': 'application/json',\r\n                },\r\n                body: JSON.stringify({refreshToken: refreshToken})\r\n            });\r\n\r\n            if (response && response.status === 200) {\r\n                const result = await response.json();\r\n                if (result && !result.error) {\r\n                    this.setTokens(result.accessToken, result.refreshToken);\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n\r\n        console.log(response);\r\n        this.removeTokens();\r\n        location.href = '#/login';\r\n        return false;\r\n\r\n    }\r\n\r\n    static setTokens(accessToken, refreshToken) {\r\n        console.log('settoken');\r\n        localStorage.setItem(this.accessTokenKey, accessToken);\r\n        localStorage.setItem(this.refreshTokenKey, refreshToken);\r\n    }\r\n\r\n    static removeTokens() {\r\n        console.log('settoken');\r\n        localStorage.removeItem(this.accessTokenKey);\r\n        localStorage.removeItem(this.refreshTokenKey);\r\n    }\r\n\r\n    static async logout() {\r\n        const refreshToken = localStorage.getItem(this.refreshTokenKey);\r\n\r\n        if (refreshToken) {\r\n            const response = await fetch('http://localhost:3000/api' + '/logout', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-type': 'application/json',\r\n                    'Accept': 'application/json',\r\n                },\r\n                body: JSON.stringify({refreshToken: refreshToken})\r\n            });\r\n\r\n            if (response && response.status === 200) {\r\n                const result = await response.json();\r\n                if (result && !result.error) {\r\n                    Auth.removeTokens();\r\n                    localStorage.removeItem(Auth.userInfoKey);\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n    }\r\n\r\n    static setUserInfo(info) {\r\n        console.log('info');\r\n        localStorage.setItem(this.userInfoKey, JSON.stringify(info));\r\n    }\r\n    static getUserInfo() {\r\n        const userInfo = localStorage.getItem(this.userInfoKey);\r\n\r\n        if (userInfo) {\r\n            return JSON.parse(userInfo);\r\n        }\r\n        return null;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://module10_project/./src/services/auth.js?");

/***/ }),

/***/ "./src/services/custom-http.js":
/*!*************************************!*\
  !*** ./src/services/custom-http.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomHttp: () => (/* binding */ CustomHttp)\n/* harmony export */ });\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.js */ \"./src/services/auth.js\");\n\r\n\r\nclass CustomHttp {\r\n    static async request(url, method = \"GET\", body = null) {\r\n        const params = {\r\n            method: method,\r\n            headers: {\r\n                'Content-type': 'application/json',\r\n                'Accept': 'application/json',\r\n            }\r\n        };\r\n\r\n        let token = localStorage.getItem(_auth_js__WEBPACK_IMPORTED_MODULE_0__.Auth.accessTokenKey);\r\n\r\n        if(token) {\r\n            params.headers['x-access-token'] = token;\r\n        }\r\n\r\n        if (body) {\r\n            params.body = JSON.stringify(body)\r\n        }\r\n\r\n        const response = await fetch(url, params);\r\n\r\n        if (response.status < 200 || response.status >= 300) {\r\n            if (response.status === 401) {\r\n                const result = await _auth_js__WEBPACK_IMPORTED_MODULE_0__.Auth.processUnauthorizedResponse();\r\n\r\n                if (result) {\r\n                    return await this.request(url, method, body)\r\n                } else {\r\n                    return null;\r\n                }\r\n            }\r\n\r\n            throw new Error(response.message);\r\n        }\r\n\r\n        return await response.json();\r\n    }\r\n}\n\n//# sourceURL=webpack://module10_project/./src/services/custom-http.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
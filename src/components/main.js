import {Chart} from "chart.js/auto";
import {Operations} from "./operations.js";
import {Balance} from '../services/balance.js';

export class Main {
    constructor() {
        this.balance = new Balance;
        this.currentBalance = this.balance.getBalance();

        this.init();
    };

    init() {
        this.newDate = new Date();
        this.currentDate = `${this.newDate.getFullYear()}-${this.newDate.getMonth()}-${this.newDate.getDate()}`;
        this.operations = new Operations;
        this.operationsList = this.operations.getOperations('today', this.currentDate, this.currentDate);

        this.dateFrom = null;
        this.dateTo = null;

        this.colorArray = ["rgb(253 126 20)", "rgb(32 201 151)", "rgb(255 193 7)", "rgb(13 110 253)", "rgb(220 53 69)"];

        this.incomeData = [];
        this.expensesData = [];

        this.incomeLabels = [];
        this.expenseLebels = [];

        this.operations = new Operations;
        this.operationsList = this.operations.getOperations('all');

        this.getDataForCharts();

        this.datePickerFrom = document.getElementById('dateFrom');
        this.datePickerTo = document.getElementById('dateTo');

        this.datePickerFrom.onchange = () => {
            this.className=(this.value!==''?'has-value':'');
            // чтобы пропадало выделение с инпутов
            this.blur();
        }
        this.datePickerTo.onchange = () => {
            this.className=(this.value!==''?'has-value':'');
            // чтобы пропадало выделение с инпутов
            this.blur();
        }

        this.setFiltersBtn();

        let currentFilters = document.getElementById('today');
        currentFilters.classList.add('btn-secondary');
        currentFilters.classList.remove('btn-outline-secondary');

    }

    getDataForCharts() {
        this.incomeData = [];
        this.expensesData = [];

        this.incomeLabels = [];
        this.expenseLebels = [];

        this.operationsList.then(operation => {
            operation.forEach(item => {
                if (item.type === 'income') {
                    // Тут почему-то не работает push (?)
                    this.incomeData[this.incomeData.length] = item.amount;

                    // Тут нужно забивать не id а category, но при создании из приложения оно не уходит. Если бить через постман - все работает
                    this.incomeLabels[this.incomeLabels.length] = item.id;
                } else {
                    // Тут почему-то не работает push (?)
                    this.expensesData[this.expensesData.length] = item.amount;

                    // Тут нужно забивать не id а category, но при создании из приложения оно не уходит. Если бить через постман - все работает
                    this.expenseLebels[this.expenseLebels.length] = item.id;
                }
            })

            this.createCharts();
        })

        this.showCharts();
    }

    showCharts() {

        const charts = [
            {
                id: 'income',
                title: 'Доходы',
                blockClassList: [
                    'income-block', 'border-end'
                ],
                chartsClassList: 'income-canvas',
                w: '360',
                h: '360'
            },
            {
                id: 'expenses',
                title: 'Расходы',
                blockClassList: [
                    'expenses-block'
                ],
                chartsClassList: '',
                w: '360',
                h: '360'
            }
        ]

        const chartsElements = document.getElementById('charts');
        chartsElements.innerHTML = '';
        charts.forEach(chart => {
            let chartBlock = document.createElement('div');
            chartBlock.classList.add(chart.id);

            let chartTitle = document.createElement('h1');
            chartTitle.classList.add('title');
            chartTitle.classList.add('text-center');
            chartTitle.innerText = chart.title;

            let chartBlockSec = document.createElement('div');
            chart.blockClassList.forEach(item => {
                chartBlockSec.classList.add(item);
            });

            let canvas = document.createElement('canvas');
            canvas.id = chart.id;
            canvas.width = chart.w;
            canvas.height = chart.h;

            chart.chartsClassList === '' ? '' : canvas.classList.add(chart.chartsClassList);

            chartBlockSec.appendChild(canvas);
            chartBlock.appendChild(chartTitle);
            chartBlock.appendChild(chartBlockSec);
            chartsElements.appendChild(chartBlock);
        })
    }

    createCharts() {

        this.setColor(this.incomeData);
        this.setColor(this.expensesData);

        const ctx = document.getElementById('income');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.incomeLabels,
                datasets: [{
                    label: 'Рублей',
                    data: this.incomeData,
                    backgroundColor: this.colorArray
                }]
            },
        });
        const ctx1 = document.getElementById('expenses');
        new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: this.expenseLebels,
                datasets: [{
                    label: 'Рублей',
                    data: this.expensesData,
                    backgroundColor: this.colorArray
                }]
            },
        });
    }

    getRandomInt() {
        return Math.floor(Math.random() * 255);
    };

    setColor(category) {
        if (this.colorArray.length < category.length) {
            let count = category.length - this.colorArray.length + 1;

            for (let i = 0; i < count; i++) {
                let color = `rgb(${this.getRandomInt()} ${this.getRandomInt()} ${this.getRandomInt()})`;
                this.colorArray.push(color);
            }
        }
    };

    setFiltersBtn() {

        let newDate = new Date();
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

        // Массив, чтобы, в теории, было проще добавлять кнопки по необходимости
        let btnList = [
            {
                period: 'interval',
                innerText: 'Сегодня',
                id: 'today'
            },
            {
                period: 'week',
                innerText: 'Неделя',
                id: 'week'
            },
            {
                period: 'month',
                innerText: 'Месяц',
                id: 'month'
            },
            {
                period: 'year',
                innerText: 'Год',
                id: 'year'
            },
            {
                period: 'all',
                innerText: 'Все',
                id: 'all'
            },
            {
                period: 'interval',
                innerText: 'Интервал',
                id: 'interval'
            },
        ];

        let btnGroup = document.getElementById('btn-group');
        btnList.forEach(btn => {
            let btnBlock = document.createElement('div');
            btnBlock.classList.add('btn-group');
            btnBlock.classList.add('mr-2');
            btnBlock.setAttribute('role', 'group');

            let btnItem = document.createElement('button');
            btnItem.setAttribute('type', 'button');
            btnItem.classList.add('btn');
            btnItem.classList.add('btn-outline-secondary');
            btnItem.innerText = btn.innerText;
            btnItem.id = btn.id;

            btnBlock.appendChild(btnItem);
            btnGroup.appendChild(btnBlock);

            btnItem.onclick = () => {
                btnList.forEach(item => {
                    document.getElementById(item.id).classList.remove('btn-secondary');
                    document.getElementById(item.id).classList.add('btn-outline-secondary');
                    // btnItem.style.color = '#6c757d;';
                });

                console.log(btnItem)
                // console.log(btnList)

                btnItem.classList.remove('btn-outline-secondary');
                btnItem.classList.add('btn-secondary');
                // btnItem.style.color = 'white';

                this.dateTo = null;
                this.dateFrom = null;

                if (btnItem.id === 'today') {
                    this.dateTo = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
                    this.dateFrom = currentDate;
                    this.period = 'interval';
                } else if (btnItem.id === 'interval') {
                    this.period = 'interval';
                    let intervalBlock = document.getElementById('interval-block');
                    let dateFromInput = document.getElementById('dateFrom');
                    let dateToInput = document.getElementById('dateTo');

                    intervalBlock.classList.remove('d-none');
                    intervalBlock.classList.add('d-flex');

                    dateFromInput.onchange = () => {
                        // dateToInput.style.display = 'block';
                        this.dateFrom = dateFromInput.value;
                        console.log(this.dateFrom)
                    }

                    dateToInput.onchange = () => {
                        this.dateTo = dateToInput.value;
                        console.log(this.dateTo)
                        if (this.dateFrom && this.dateTo) {
                            this.getTable('interval', this.dateFrom, this.dateTo);
                        }
                    }
                } else if (btnItem.id === 'week') {
                    this.period = 'week';
                } else if (btnItem.id === 'month') {
                    this.period = 'month';
                } else if (btnItem.id === 'year') {
                    this.period = 'year';
                } else if (btnItem.id === 'all') {
                    this.period = 'all'
                }

                this.operationsList = this.operations.getOperations(btnItem.period, this.dateFrom, this.dateTo);

                this.getDataForCharts();
            }
        });
    }
}
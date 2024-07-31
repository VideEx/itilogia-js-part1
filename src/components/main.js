import {Chart} from "chart.js/auto";

export class Main {
    constructor() {
        // this.colorArray = ["rgb(253 126 20)", "rgb(32 201 151)", "rgb(255 193 7)", "rgb(13 110 253)", "rgb(220 53 69)"];
        this.colorArray = ["rgb(253 126 20)", "rgb(32 201 151)"];

        this.incomeData = [
            {
                id: 1,
                value: 20,
                color: null
            },
            {
                id: 2,
                value: 30,
                color: null
            },
            {
                id: 3,
                value: 10,
                color: null
            },
            {
                id: 4,
                value: 30,
                color: null
            },
            {
                id: 5,
                value: 30,
                color: null
            },
            {
                id: 6,
                value: 30,
                color: null
            },
            {
                id: 7,
                value: 30,
                color: null
            },
            {
                id: 8,
                value: 30,
                color: null
            },
            {
                id: 9,
                value: 30,
                color: null
            },
            {
                id: 10,
                value: 30,
                color: null
            },
            {
                id: 11,
                value: 30,
                color: null
            },
            {
                id: 12,
                value: 30,
                color: null
            }
        ];
        this.expensesData = [
            {
                value: 20,
                color: null
            },
            {
                value: 10,
                color: null
            },
            {
                value: 30,
                color: null
            },
            {
                value: 30,
                color: null
            },
            {
                value: 30,
                color: null
            }
        ];

        const ctx = document.getElementById('income');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                datasets: [{
                    label: 'Рублей',
                    data: this.incomeData,
                }]
            },
        });
        const ctx1 = document.getElementById('expenses');
        new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                datasets: [{
                    label: 'Рублей',
                    data: this.expensesData,
                }]
            },
        });

        if (this.colorArray.length < this.incomeData.length) {
            let count = this.incomeData.length - this.colorArray.length + 1;

            for (let i = 0; i < count; i++) {
                this.getColor();
            };

            console.log(this.colorArray);

            this.incomeData.forEach(item => {
                item.color = this.colorArray[item.id];
            });

            console.log(this.incomeData)
        };
    };
    
    getRandomInt() {
        return Math.floor(Math.random() * 255);
    };

    getColor() {
        let color = `rgb(${this.getRandomInt()} ${this.getRandomInt()} ${this.getRandomInt()})`;
        this.setColor(color);
    };

    setColor(color) {
        this.colorArray.push(color);
    };


}
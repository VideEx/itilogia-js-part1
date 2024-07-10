import {Chart} from "./chart.min.js";

let incomeData = [
    {
        value: 20,
        color:"#878BB6"
    },
    {
        value : 40,
        color : "#4ACAB4"
    },
    {
        value : 10,
        color : "#FF8153"
    },
    {
        value : 30,
        color : "#FFEA88"
    }
];

let incomeOptions = {
    segmentShowStroke : false,
    animateScale : true
}

let income = document.getElementById("income").getContext("2d");

new Chart(income).Pie(incomeData, incomeOptions);

let expensesData = [
    {
        value: 20,
        color:"#878BB6"
    },
    {
        value : 40,
        color : "#4ACAB4"
    },
    {
        value : 10,
        color : "#FF8153"
    },
    {
        value : 30,
        color : "#FFEA88"
    }
];

let expensesOptions = {
    segmentShowStroke : false,
    animateScale : true
}

let expenses = document.getElementById("expenses").getContext("2d");

new Chart(expenses).Pie(expensesData, expensesOptions);

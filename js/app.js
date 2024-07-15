// // import {Chart} from "./chart.min.js";
//
let incomeData = [
    {
        value: 20,
        color: "rgba(220, 53, 69, 1)"
    },
    {
        value: 30,
        color: "rgba(32, 201, 151, 1)"
    },
    {
        value: 10,
        color: "rgba(13, 110, 253, 1)"
    },
    {
        value: 30,
        color: "rgba(255, 193, 7, 1)"
    },
    {
        value: 30,
        color: "rgba(253, 126, 20, 1)"
    }
];
//
// let incomeOptions = {
//     segmentShowStroke: false,
//     animateScale: true,
//     legend: {
//         display: true,
//         position: 'top',
//         labels: {
//             fontColor: 'black',
//             fontFamily: 'Calibri Light',
//             fontStyle: 'italic'
//         }
//     }
// }
//
// let income = document.getElementById("income").getContext("2d");
//
// new Chart(income).Pie(incomeData, incomeOptions);
//
let expensesData = [
    {
        value: 20,
        color: "rgba(220, 53, 69, 1)"
    },
    {
        value: 10,
        color: "rgba(13, 110, 253, 1)"
    },
    {
        value: 30,
        color: "rgba(255, 193, 7, 1)"
    },
    {
        value: 30,
        color: "rgba(32, 201, 151, 1)"
    },
    {
        value: 30,
        color: "rgba(253, 126, 20, 1)"
    }
];
//
// let expensesOptions = {
//     segmentShowStroke: false,
//     animateScale: true,
//     options: {
//         aspectRatio: 2,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'left',
//                 reverse: true, // Reverse order of legend labels
//                 title: {
//                     display: true,
//                     text: 'Number of Days',
//                     font: {
//                         size: 14,
//                         weight: 'bold'
//                     },
//                     padding: 20,
//                     color: 'green'
//                 }
//             }
//         }
//     }
// }
//
// let expenses = document.getElementById("expenses").getContext("2d");
//
// new Chart(expenses).Pie(expensesData, expensesOptions);

const ctx = document.getElementById('income');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            label: 'Рублей',
            data: incomeData,
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
            data: expensesData,
        }]
    },
});
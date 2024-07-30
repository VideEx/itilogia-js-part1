// import {Chart} from "../chart.min.js";
//
// export class Main {
//     constructor() {
//         let incomeData = [
//             {
//                 value: 20,
//                 color: "rgba(220, 53, 69, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(32, 201, 151, 1)"
//             },
//             {
//                 value: 10,
//                 color: "rgba(13, 110, 253, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(255, 193, 7, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(253, 126, 20, 1)"
//             }
//         ];
//
//         let expensesData = [
//             {
//                 value: 20,
//                 color: "rgba(220, 53, 69, 1)"
//             },
//             {
//                 value: 10,
//                 color: "rgba(13, 110, 253, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(255, 193, 7, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(32, 201, 151, 1)"
//             },
//             {
//                 value: 30,
//                 color: "rgba(253, 126, 20, 1)"
//             }
//         ];
//
//         const ctx = document.getElementById('income');
//
//         new Chart(ctx, {
//             type: 'pie',
//             data: {
//                 labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//                 datasets: [{
//                     label: 'Рублей',
//                     data: incomeData,
//                 }]
//             },
//         });
//         const ctx1 = document.getElementById('expenses');
//
//         new Chart(ctx1, {
//             type: 'pie',
//             data: {
//                 labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//                 datasets: [{
//                     label: 'Рублей',
//                     data: expensesData,
//                 }]
//             },
//         });
//     }
// }
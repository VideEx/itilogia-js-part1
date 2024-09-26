//
//
// export class Charts {
//     showCharts() {
//
//         const charts = [
//             {
//                 id: 'income',
//                 title: 'Доходы',
//                 blockClassList: [
//                     'income-block', 'border-end'
//                 ],
//                 chartsClassList: 'income-canvas',
//                 w: '360',
//                 h: '360'
//             },
//             {
//                 id: 'expenses',
//                 title: 'Расходы',
//                 blockClassList: [
//                     'expenses-block'
//                 ],
//                 chartsClassList: '',
//                 w: '360',
//                 h: '360'
//             }
//         ]
//
//         const chartsElements = document.getElementById('charts');
//         chartsElements.innerHTML = '';
//         charts.forEach(chart => {
//             let chartBlock = document.createElement('div');
//             chartBlock.classList.add(chart.id);
//
//             let chartTitle = document.createElement('h1');
//             chartTitle.classList.add('title');
//             chartTitle.classList.add('text-center');
//             chartTitle.innerText = chart.title;
//
//             let chartBlockSec = document.createElement('div');
//             chart.blockClassList.forEach(item => {
//                 chartBlockSec.classList.add(item);
//             });
//
//             let canvas = document.createElement('canvas');
//             canvas.id = chart.id;
//             canvas.width = chart.w;
//             canvas.height = chart.h;
//
//             chart.chartsClassList === '' ? '' : canvas.classList.add(chart.chartsClassList);
//
//             chartBlockSec.appendChild(canvas);
//             chartBlock.appendChild(chartTitle);
//             chartBlock.appendChild(chartBlockSec);
//             chartsElements.appendChild(chartBlock);
//         })
//     }
//
//     createCharts() {
//
//         this.setColor(this.incomeData);
//         this.setColor(this.expensesData);
//
//         const ctx = document.getElementById('income');
//         new Chart(ctx, {
//             type: 'pie',
//             data: {
//                 labels: this.incomeLabels,
//                 datasets: [{
//                     label: 'Рублей',
//                     data: this.incomeData,
//                     backgroundColor: this.colorArray
//                 }]
//             },
//         });
//         const ctx1 = document.getElementById('expenses');
//         new Chart(ctx1, {
//             type: 'pie',
//             data: {
//                 labels: this.expenseLebels,
//                 datasets: [{
//                     label: 'Рублей',
//                     data: this.expensesData,
//                     backgroundColor: this.colorArray
//                 }]
//             },
//         });
//     }
//
//     getRandomInt() {
//         return Math.floor(Math.random() * 255);
//     };
//
//     setColor(category) {
//         if (this.colorArray.length < category.length) {
//             let count = category.length - this.colorArray.length + 1;
//
//             for (let i = 0; i < count; i++) {
//                 let color = `rgb(${this.getRandomInt()} ${this.getRandomInt()} ${this.getRandomInt()})`;
//                 this.colorArray.push(color);
//             }
//         }
//     };
// }
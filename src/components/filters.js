export class Filters {
    constructor(callback) {
        this.getData = callback;
    }

    setFiltersBtn() {
        let newDate = new Date();
        let currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;

        let btnList = ['today', 'week', 'month', 'year', 'all', 'interval'];

        btnList.forEach(btn => {
            let btnItem = document.getElementById(btn);
            btnItem.onclick = () => {
                btnList.forEach(item => {
                    document.getElementById(item).classList.remove('btn-secondary');
                    document.getElementById(item).classList.add('btn-outline-secondary');
                });

                btnItem.classList.remove('btn-outline-secondary');
                btnItem.classList.add('btn-secondary');

                let period = 'interval';

                let dateTo = currentDate;
                let dateFrom = currentDate;

                let intervalBlock = document.getElementById('interval-block');

                intervalBlock.classList.remove('d-flex');
                intervalBlock.classList.add('d-none');

                if (btnItem.id === 'today') {
                    dateTo = currentDate;
                    dateFrom = currentDate;
                    period = 'interval';


                } else if (btnItem.id === 'interval') {
                    period = 'interval';
                    let dateFromInput = document.getElementById('dateFrom');
                    let dateToInput = document.getElementById('dateTo');

                    intervalBlock.classList.remove('d-none');
                    intervalBlock.classList.add('d-flex');

                    dateFromInput.onchange = () => {
                        dateFrom = dateFromInput.value;
                    }

                    dateToInput.onchange = () => {
                        dateTo = dateToInput.value;

                        if (dateFrom && dateTo) {
                            this.getData(period, dateFrom, dateTo);
                        }
                    }
                } else {
                    period = btnItem.id;
                    dateTo = null;
                    dateFrom = null;
                }

                this.getData(period, dateFrom, dateTo);
            }
        });
    };
}
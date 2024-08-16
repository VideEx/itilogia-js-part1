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

                if (btnItem.id === 'today') {
                    dateTo = currentDate;
                    dateFrom = currentDate;
                    period = 'interval';
                } else if (btnItem.id === 'interval') {
                    period = 'interval';
                    let intervalBlock = document.getElementById('interval-block');
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
                } else if (btnItem.id === 'week') {
                    period = 'week';
                    dateTo = null;
                    dateFrom = null;
                } else if (btnItem.id === 'month') {
                    period = 'month';
                    dateTo = null;
                    dateFrom = null;
                } else if (btnItem.id === 'year') {
                    period = 'year';
                    dateTo = null;
                    dateFrom = null;
                } else if (btnItem.id === 'all') {
                    period = 'all';
                    dateTo = null;
                    dateFrom = null;
                }

                this.getData(period, dateFrom, dateTo);
            }
        });
    };
}
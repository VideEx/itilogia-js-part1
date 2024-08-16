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

                this.dateTo = null;
                this.dateFrom = null;

                if (btnItem === 'today') {
                    this.dateTo = currentDate;
                    this.dateFrom = currentDate;
                    this.period = 'interval';
                } else if (btnItem === 'interval') {
                    this.period = 'interval';
                    let intervalBlock = document.getElementById('interval-block');
                    let dateFromInput = document.getElementById('dateFrom');
                    let dateToInput = document.getElementById('dateTo');

                    intervalBlock.classList.remove('d-none');
                    intervalBlock.classList.add('d-flex');

                    dateFromInput.onchange = () => {
                        this.dateFrom = dateFromInput.value;
                    }

                    dateToInput.onchange = () => {
                        this.dateTo = dateToInput.value;

                        if (this.dateFrom && this.dateTo) {
                            this.getData();
                        }
                    }
                } else if (btnItem === 'week') {
                    this.period = 'week';
                } else if (btnItem === 'month') {
                    this.period = 'month';
                } else if (btnItem === 'year') {
                    this.period = 'year';
                } else if (btnItem === 'all') {
                    this.period = 'all'
                }

                this.getData();
            }
        });
    };
}
import config from "../../config/config.js";
import {CustomHttp} from "../services/custom-http.js";
import {Operations} from "../components/operations.js";

export class Balance {
    constructor() {
        this.currentBalance = 0;
        this.currentBalanceElement = document.getElementById('current-balance');
        this.init();
    }

    init() {
        this.operation = new Operations;

        const data = this.operation.getOperations('all').then(operation => {
            operation.forEach(item => {
                item.type === 'income' ? this.currentBalance = this.currentBalance + item.amount : this.currentBalance = this.currentBalance - item.amount;
            })

            this.updateBalance(this.currentBalance);
        })
    };

    async getBalance() {
        try {
            const result = await CustomHttp.request(`${config.host}/balance`)

            if (result) {
                if (result.error) {
                    throw new Error(result.message)
                }
            }

            return result;
        } catch (error) {
            return console.log(error)
        }
    }

    async updateBalance(currentBalance) {

        const response = await CustomHttp.request(`${config.host}/balance`, 'PUT', {
            newBalance: currentBalance
        });

        if (response && response.status === 200) {
            const result = await response.json();
            console.log(result)

            if (result && !result.error) {
                console.log('Что-то пошло не по плану!');
            }
        }

        this.currentBalanceElement.innerText = currentBalance;
        this.updateBalance(currentBalance);
    }
}
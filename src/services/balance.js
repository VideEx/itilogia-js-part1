import config from "../../config/config.js";
import {CustomHttp} from "../services/custom-http.js";

export class Balance {

    static async getBalance() {
        try {
            const result = await CustomHttp.request(`${config.host}/balance`)

            if (result) {
                if (result.error) {
                    throw new Error(result.message)
                }
            }

            document.getElementById('current-balance').innerText = result.balance;

            // return result.balance;
        } catch (error) {
            return console.log(error)
        }
    }

    static async updateBalance(currentBalance) {
        try {
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
        } catch (error) {
            return console.log(error);
        }
    }
}
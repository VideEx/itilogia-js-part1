import {CustomHttp} from "../../services/custom-http.js";
import config from "../../../config/config.js";
import {Balance} from '../../services/balance.js';

export class Operations {
    constructor() {

    }

    async getOperations(period, dateFrom = null, dateTo = null) {
        try {
            console.log(dateTo)
            let params = '';

            if (dateFrom === null || dateTo === null) {
                params = `?period=${period}`
            } else {
                params = `?period=interval&dateFrom=${dateFrom}&dateTo=${dateTo}`;
            }

            console.log(params)
            const result = await CustomHttp.request(`${config.host}/operations${params}`)

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

    async getOperation(id) {
        try {
            const result = await CustomHttp.request(`${config.host}/operations/${id}`)

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


}
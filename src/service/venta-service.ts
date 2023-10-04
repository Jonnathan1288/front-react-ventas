import axios from "axios";
import { getApiUrl } from "../environment/environment";

import { DateRequest } from '../interface/date-request'

export const VentasService = {

    getData() {
        return axios.get(getApiUrl('list')).then((e) => { return e.data })
    },

    getChartFiltered() {
        return axios.get(getApiUrl('reuest/chart')).then((e) => { return e.data })
    },

    requesData(dateRequest: DateRequest) {
        return axios.post(getApiUrl('reuest'), dateRequest).then((e) => { return e.data })
    },

    getChartFilteredDate(dateRequest: DateRequest) {
        return axios.post(getApiUrl('reuest/chart/final'), dateRequest).then((e) => { return e.data })
    },

};
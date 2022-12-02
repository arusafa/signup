import axios from "axios";

export default class API {
    constructor() {
        this.axios = axios.create({
            baseURL: "https://comp3123-assignment-2.herokuapp.com/api/emp",
            timeout: 1000,
            headers: {"Acsess-Control-Allow-Origin": "*"}
        });
    }

    getEmployees() {
        return this.axios.get("/employees");
    }

    getEmployeeById(id) {
        return this.axios.get(`/employees/:${id}`);
    }
}
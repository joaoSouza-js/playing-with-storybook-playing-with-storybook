import axios from "axios"

const baseUrl = 'http://localhost:3000'

export const Axios = axios.create({
    baseURL: baseUrl
})
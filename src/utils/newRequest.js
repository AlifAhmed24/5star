import axios from 'axios'

const newRequest = axios.create({
    baseURL:"https://5starestateliquidations.com",
    withCredentials: true
})

export default newRequest;
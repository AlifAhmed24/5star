import axios from 'axios'

const newRequest = axios.create({
    baseURL:"https://5star.nfshost.com",
    withCredentials: true
})

export default newRequest;
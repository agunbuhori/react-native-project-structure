import axios from "axios";


const instance = axios.create({
    baseURL: 'https://buhori.com/api'
});

export default instance;


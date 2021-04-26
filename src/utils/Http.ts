import axios from 'axios';
import { BASE_URL } from '@env';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export default axios;
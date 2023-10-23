import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://expressatypical.inffus.com.br/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default api;

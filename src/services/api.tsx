import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://expressatypical.inffus.com.br/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
});


export default api;

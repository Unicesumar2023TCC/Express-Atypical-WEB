import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
});


export default api;

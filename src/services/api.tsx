import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://expressatypical.inffus.com.br/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// Adicionando configuração para permitir todas as origens
api.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';

export default api;

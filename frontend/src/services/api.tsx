import axios from 'axios';

export const api = axios.create({
    baseURL: 'REACT_APP_BACKEND_URL',
});

//Uso: api.get / api.post/ api.put / api.delete

import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

//Uso: api.get / api.post/ api.put / api.delete

import express from 'express';

const app = express();

app.get('/', (request: any, response: any) => {
    return response.json({ message: 'Hello asasdas!'});
  });
  

module.exports = app;
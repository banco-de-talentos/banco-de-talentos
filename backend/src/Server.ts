import express from 'express';

const app = express();

app.get('/', (request: any, response: any) => {
  return response.send('Hello World!');
});

app.listen(3001, () => {
  console.log('RODANDO!');
});
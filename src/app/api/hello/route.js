// export async function GET(request) {
//   return new Response('Hello, Next.js!')
// }


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});
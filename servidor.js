import http from 'http';
import chalk from 'chalk';

const host = 'localhost';
const puerto = 8000; // o 8080

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const respuesta = JSON.stringify({ nombre: 'felipe', mensaje: 'Hola, este es mi servidor Node.js' });
  res.end(respuesta);
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
});

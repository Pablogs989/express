const express = require('express');
const app = express();
app.use(express.json());

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor 2 levantado en el puerto ${puerto}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a Express!');
});

app.get('/productos', (req, res) => {
    res.send('Listado de productos');
  });

  
app.post('/productos', (req, res) => {  
    res.send('Crear un producto');
  });

app.put('/productos', (req, res) => {
    res.send('Actualizar un producto');
  });

app.delete('/productos', (req, res) => {
    res.send('Eliminar un producto');
});

app.get('/usuarios', (req, res) => {
    res.send('Listado de usuarios');
  });

  
app.post('/usuarios', (req, res) => {  
    res.send('Crear un usuario');
  });

app.put('/usuarios', (req, res) => {
    res.send('Actualizar un usuario');
  });

app.delete('/usuarios', (req, res) => {
    res.send('Eliminar un usuario');
});
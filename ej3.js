const express = require('express');
const app = express();
app.use(express.json());

items = [
    { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
    { id: 2, nombre: 'FIFA 23 PS5', precio: 1000 },
    { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
    { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
    { id: 5, nombre: 'Skin Valorant', precio: 120 },
    { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
]


const puerto = 3000;

app.get('/items', (req, res) => {
    res.send('Listado de items: ' + items.map(items => items.nombre).join(', '));
});

app.post("/items", (req, res) => {
    console.log(req.body);
    const newProduct = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    items.push(newProduct)
    res.status(201).send({
        description: 'Productos',
        items
    })
})

app.put('/items/id/:id', (req, res) => {
    let found = false;
    items.forEach(producto => {
        if (producto.id == req.params.id) {
            found = true;
        }
    });
    if (found) {
        const updateProduct = req.body
        items.forEach(producto => {
            if (producto.id == req.params.id) {
                producto.nombre = updateProduct.nombre ? updateProduct.nombre : producto.nombre
                producto.precio = updateProduct.precio ? updateProduct.precio : producto.precio
                res.status(200).send(producto)
            }
        })
    } else {
        res.status(400).send('Producto no encontrado')
    }
});

app.delete("/items/id/:id", (req, res) => {
    let found = false;
    items.forEach(producto => {
        if (producto.id == req.params.id) {
            found = true;
        }
    });
    if (found) {
        const itemsFilter = items.filter(producto => producto.id != req.params.id)
        res.send(itemsFilter)
    } else {
        res.status(404).send(`Member with id ${req.params.id} not found`)
    }
});

app.get('/items/precio/:precio', (req, res) => {
    const precio = parseInt(req.params.precio);
    const itemsFilter = items.filter(producto => producto.precio == precio)
    res.send(itemsFilter)
});

app.get('/items/precio/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    const itemsFilter = items.filter(producto => producto.precio >= min && producto.precio <= max)
    res.send(itemsFilter)
});

app.get('/items/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemsFilter = items.filter(producto => producto.id == id)
    res.send(itemsFilter)
});

app.get('/items/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const itemsFilter = items.filter(producto => producto.nombre == nombre)
    res.send(itemsFilter)
});

app.listen(puerto, () => {
    console.log(`Servidor 3 levantado en el puerto ${puerto}`);
});

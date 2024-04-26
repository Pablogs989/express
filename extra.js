const url = "http://localhost:3000/";
const div = document.getElementById("products");

let data = [];

const pintar = (data) => {
    data.forEach(objeto => {
        const btnEliminar = document.createElement("button");
        const divContenedor = document.createElement('div');
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.innerText = objeto.nombre;
        p.innerText = objeto.precio;
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(objeto);
        }
        divContenedor.appendChild(h2);
        divContenedor.appendChild(p);
        divContenedor.appendChild(btnEliminar);
        divContenedor.style = "border: 1px solid black; padding: 10px;"
        div.appendChild(divContenedor);
    });
}

const getItems = () => {
    axios.get(url + "products")
        .then((response) => {
            data = response.data.items;
            pintar(data);
        })
        .catch((error) => console.error(error));
}

const eliminar = (objeto) => {
    axios.delete(url + "products/id/" + objeto.id)
        .then((response) => {
            div.innerHTML = "";
            data = response.data;
            pintar(data);
        })
        .catch((error) => console.error(error));
}


getItems();
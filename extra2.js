const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const btn = document.getElementById("crear-btn");

const url = "http://localhost:3000/";

btn.onclick = () => {
    axios.post(url + "products", {
        nombre: nombre.value,
        precio: precio.value
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => console.error(error));
}

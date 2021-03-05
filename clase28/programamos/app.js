let compras = [];
let productos = [
    {
        marca: "puma",
        color: "blanco",
        talle: 41,
        precio: 55
    },
    {
        marca: "nike",
        color: "grises",
        talle: 45,
        precio: 70
    },
    {
        marca: "Fila",
        color: "morados",
        talle: 42,
        precio: 60
    },
    {
        marca: "vans",
        color: "negro",
        talle: 40,
        precio: 160
    }
];

let lista = document.getElementById('lista');

for (let indice = 0; indice < productos.length; indice++) {
    const producto = productos[indice];
    
    let liProducto = document.createElement('li');

    let pProducto = document.createElement('p');
    pProducto.textContent = producto.marca;
    liProducto.appendChild(pProducto);

    let btnAgregarProducto = document.createElement('button');
    btnAgregarProducto.textContent = 'Agregar';
    btnAgregarProducto.setAttribute('key', indice);

    liProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.addEventListener('click', (e) => {
        let indiceBtn = parseInt(e.target.getAttribute('key'));
        compras.push(productos[indiceBtn]);
    });

    lista.appendChild(liProducto);
}

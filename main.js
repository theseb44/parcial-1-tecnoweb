let opcion = document.getElementById("opcion")
let descripcion = document.getElementById("descripcion")
let cantidad = document.getElementById("cantidad")
let porcdescuento = document.getElementById("descuento");
let precioUni = document.getElementById("unitario");
let costimporte = document.getElementById("importe");
let tabla = document.getElementById("Tproductos")
let envio = document.getElementById("envio")

const prueba = (e) => {

    e.preventDefault();

    console.log(opcion.value)
    console.log(descripcion.value)
    console.log(cantidad.value)
    console.log(porcdescuento.value)


}

const AñadirProducto = () => {

    let producto = {

        nomproducto: opcion.value,
        descrip: descripcion.value,
        cantidad: cantidad.value,
        descuento: porcdescuento.value,
        precio: precioUni.value,
        importe: costimporte.value

    };

    let nomprotd = document.createElement("td")
    nomprotd.innerHTML = producto.nomproducto

    let descripciontd = document.createElement("td")
    descripciontd.innerHTML = producto.descrip

    let cantidadtd = document.createElement("td")
    cantidadtd.innerHTML = "10000"

    let preciotd = document.createElement("td")
    preciotd.innerHTML = producto.precio

    let descuentotd = document.createElement("td")
    descuentotd.innerHTML = producto.descuento

    let importetd = document.createElement("td")
    importetd.innerHTML = producto.importe

    let fila = document.createElement("tr")
    fila.appendChild(nomprotd)
    fila.appendChild(descripciontd)
    fila.appendChild(cantidadtd)
    fila.appendChild(preciotd)
    fila.appendChild(descuentotd)
    fila.appendChild(importetd)

    console.log(producto)
    tabla.appendChild(fila)
}
envio.addEventListener("click", AñadirProducto())
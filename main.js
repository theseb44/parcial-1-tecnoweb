let opcion = document.getElementById("opcion")
let descripcion = document.getElementById("descripcion")
let cantidad = document.getElementById("cantidad")
let porcdescuento = document.getElementById("descuento");
let precioUni = document.getElementById("unitario");
let costimporte = document.getElementById("importe");
let tabla = document.getElementById("Tproductos")
let envio = document.getElementById("envio")
let tdOpcion = document.getElementById("validaOpcion")
let tdCan = document.getElementById("validaCantidad")
let tddescuento = document.getElementById("validaDescuento")
let datos = new Set();
let con = 0
let botonEliminar = document.getElementById("botonEliminar")
let botonBuscar = document.getElementById("botonBuscar")
let Npedido = document.getElementById("Npedido")
let adverRep = document.getElementById("adverRepeticion")


const opValidacion = () => {
    let adverP = document.getElementById("adverOP")
    if (opcion.value === "Ninguno") {
        if (adverP === null) {
            let advertencia = document.createElement("P")
            advertencia.id = "adverOP"
            advertencia.style.color = "red"
            advertencia.style.fontSize = "small"
            advertencia.innerHTML = "NO puede contener ese valor"

            tdOpcion.appendChild(advertencia)

            setTimeout(() => {
                tdOpcion.removeChild(advertencia)
            }, 2500)
        }

        return false

    }
    return true
}

const canValidacion = () => {
    let adverP = document.getElementById("adverCan")
    if (+cantidad.value > 30 || +cantidad.value < 0) {
        if (adverP === null) {
            let advertencia = document.createElement("P")
            advertencia.id = "adverCan"
            advertencia.style.color = "red"
            advertencia.style.fontSize = "small"
            advertencia.innerHTML = "la cantidad debe ser menor de 30 y mayor que 0"

            tdCan.appendChild(advertencia)

            setTimeout(() => {
                tdCan.removeChild(advertencia)
            }, 3500)
        }
        return false
    }
    return true
}

const porcValidacion = () => {
    let adverP = document.getElementById("adverPorc")
    if (+porcdescuento.value > 50) {
        if (adverP === null) {
            let advertencia = document.createElement("P")
            advertencia.id = "adverPorc"
            advertencia.style.color = "red"
            advertencia.style.fontSize = "small"
            advertencia.innerHTML = "NO puede ser mayor de 50"

            tddescuento.appendChild(advertencia)

            setTimeout(() => {
                tddescuento.removeChild(advertencia);
            }, 4500)
        }
        return false
    }
    return true
}

function validaciones() {

    let x = opValidacion()
    let y = canValidacion()
    let z = porcValidacion()
    if (x && y && z) {

        return true
    } else {
        return false
    }
}


function calcularTotal() {

    let total = +cantidad.value * +precioUni.value;
    let descuento = total * (+porcdescuento.value / 100)
    total += +costimporte.value;
    total = total - descuento;
    return total
}

const AñadirProducto = (e) => {


    e.preventDefault();

    if (validaciones() == true) {

        let producto = {

            // idProducto: con += 1, // discutir con jose despues
            nomproducto: opcion.value,
            descrip: descripcion.value,
            cantidad: cantidad.value,
            descuento: porcdescuento.value,
            precio: precioUni.value,
            importe: costimporte.value

        };

        if (BuscarProducto(producto) == false) {

            let idProducto = document.createElement("td")
            idProducto.innerHTML = con += 1;

            let nomprotd = document.createElement("td")
            nomprotd.innerHTML = producto.nomproducto

            let descripciontd = document.createElement("td")
            descripciontd.innerHTML = producto.descrip

            let cantidadtd = document.createElement("td")
            cantidadtd.innerHTML = producto.cantidad

            let preciotd = document.createElement("td")
            preciotd.innerHTML = producto.precio

            let descuentotd = document.createElement("td")
            descuentotd.innerHTML = producto.descuento

            let importetd = document.createElement("td")
            importetd.innerHTML = producto.importe

            let total = document.createElement("td")
            total.innerHTML = calcularTotal();

            let botonEliminar = document.createElement("button")
            botonEliminar.innerHTML = "Eliminar"
            botonEliminar.className = "button is-small is-danger";
            botonEliminar.id = `botonEliminar${con}`

            let fila = document.createElement("tr")
            fila.id = `filaN${con}`;
            fila.appendChild(idProducto)
            fila.appendChild(nomprotd)
            fila.appendChild(descripciontd)
            fila.appendChild(cantidadtd)
            fila.appendChild(preciotd)
            fila.appendChild(descuentotd)
            fila.appendChild(importetd)
            fila.appendChild(total)
            fila.appendChild(botonEliminar)

            console.log(producto)
            tabla.appendChild(fila)



            datos.add(producto)
        } else {
            adverRep.style.color = "red"
            adverRep.style.fontSize = "medium"
            adverRep.innerHTML = "Los productos no se pueden repetir"
            setTimeout(() => {
                adverRep.innerHTML = ""
            }, 3500)
        }
    }
}

const EliminarProducto = () => {

    let filaN = document.getElementById(`filaN${con += 1}`)
    //TODO falta pensar como saber en que fila esta el producto al que se le presiono el eliminar
    //filaN se utilizara para eliminar la fila despues que se encuentre
}

function BuscarProducto(producto){


    for (let productoI of datos) {
        if (productoI.nomproducto == producto.nomproducto) {
            return true
        }
    }
    return false
}


envio.addEventListener("click", AñadirProducto)


botonBuscar.addEventListener("click", BuscarProducto)
botonEliminar.addEventListener("click", EliminarProducto)
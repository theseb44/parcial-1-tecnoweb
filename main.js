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




function validaciones() {

    let advertencia = document.createElement("P")
    if (opcion.value === "Ninguno") {

        advertencia.innerHTML = "NO puede contener ese valor"
        advertencia.style.color = "red"
        advertencia.style.fontSize = "small"
        tdOpcion.appendChild(advertencia)
        
        return false
    } 
    if(+cantidad.value > 30 || +cantidad.value < 0){
        advertencia.innerHTML = "la cantidad debe ser menor de 30 y mayor que 0"
        advertencia.style.color = "red"
        advertencia.style.fontSize = "small"
        tdCan.appendChild(advertencia)
        
        return false
    }

    if(+porcdescuento.value > 50){

        advertencia.innerHTML = "NO puede ser mayor de 50"
        advertencia.style.color = "red"
        advertencia.style.fontSize = "small"
        tddescuento.appendChild(advertencia)
        
        return false    
    }

    return true
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

    if (validaciones() == false) {
        alert("nada manito")
    } else {
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
        cantidadtd.innerHTML = producto.cantidad

        let preciotd = document.createElement("td")
        preciotd.innerHTML = producto.precio

        let descuentotd = document.createElement("td")
        descuentotd.innerHTML = producto.descuento

        let importetd = document.createElement("td")
        importetd.innerHTML = producto.importe

        let total = document.createElement("td")
        total.innerHTML = calcularTotal();

        let fila = document.createElement("tr")
        fila.appendChild(nomprotd)
        fila.appendChild(descripciontd)
        fila.appendChild(cantidadtd)
        fila.appendChild(preciotd)
        fila.appendChild(descuentotd)
        fila.appendChild(importetd)
        fila.appendChild(total)

        console.log(producto)
        tabla.appendChild(fila)
    }
}
envio.addEventListener("click", AñadirProducto)
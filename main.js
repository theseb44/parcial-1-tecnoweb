let opcion = document.querySelector(".opcion").value;
let descripcion = document.querySelector(".descripcion").value
let cantidad = document.querySelector(".cantidad").value;
let porcdescuento = document.querySelector(".descuento").value;
let precioUni = document.querySelector(".unitario").value;
let costimporte = document.querySelector(".importe").value;
let tabla = document.querySelector(".Tproductos")
let envio = document.querySelector(".envio")
//envio.addEventListener("click", AñadirProductos())

let object = {

    nomproducto: opcion,
    descripcion: descripcion,
    cantidad: cantidad,
    descuento: porcdescuento,
    precio: precioUni,
    importe: costimporte
};

console.log(nomproducto)
console.log(descripcion)

function validar(){

    let cantidad = document.querySelector(".cantidad").value;
    if(cantidad > 30 || cantidad< 1){

        alert("la cantidad ingresada no es valida")
    }

    let descuento = document.querySelector(".descuento").value;
    if(descuento > 50 || descuento < 1){

        alert("el descuento ingresado no es valido")
    }

}

function calcularTotal(){

    let total = cantidad * precioUni;
    let descuento = total * (porcdescuento/100)
    total += costimporte;
    total = total - descuento;

    alert(total);
}



const AñadirProductos = ()=>{

    let nompro = document.createElement("td")
    nompro.innerHTML = object.nomproducto

    let descripcion = document.createElement("td")
    descripcion.innerHTML = object.descripcion

    let cantidad = document.createElement("td")
    cantidad.innerHTML = object.cantidad

    let precio = document.createElement("td")
    precio.innerHTML = object.precio

    let descuento = document.createElement("td")
    descuento.innerHTML = object.descuento

    let importe = document.createElement("td")
    importe.innerHTML = object.importe

    let fila = document.createElement("tr")
    fila.appendChild(nompro)
    fila.appendChild(descripcion)
    fila.appendChild(cantidad)
    fila.appendChild(precio)
    fila.appendChild(descuento)
    fila.appendChild(importe)

    tabla.appendChild(fila)
}
envio.addEventListener("click", AñadirProductos())
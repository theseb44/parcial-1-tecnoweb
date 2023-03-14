
var cantidad = document.querySelector(".cantidad").value;
var porcdescuento = document.querySelector(".descuento").value;
var precioUni = document.querySelector(".unitario").value;
var costimporte = document.querySelector(".importe").value;
var envio = document.querySelector(".envio")
envio.addEventListener("click", calcularTotal)


function validar(){

    var cantidad = document.querySelector(".cantidad").value;
    if(cantidad > 30 || cantidad< 1){

        alert("la cantidad ingresada no es valida")
    }

    var descuento = document.querySelector(".descuento").value;
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
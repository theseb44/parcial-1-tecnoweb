let opcion = document.getElementById("opcion");
let descripcion = document.getElementById("descripcion");
let cantidad = document.getElementById("cantidad");
let porcdescuento = document.getElementById("descuento");
let precioUni = document.getElementById("unitario");
let costimporte = document.getElementById("importe");
let tabla = document.getElementById("Tproductos");
let envio = document.getElementById("envio");
let tdOpcion = document.getElementById("validaOpcion");
let tdCan = document.getElementById("validaCantidad");
let tddescuento = document.getElementById("validaDescuento");
let datos = new Set();
let con = 0;
let botonEliminar = document.getElementById("botonEliminar");
let botonBuscar = document.getElementById("buscarFactura");
let Npedido = document.getElementById("Npedido");
let adverRep = document.getElementById("adverRepeticion");
let codigofactura = document.getElementById("codigoFactura");
let tdvalCodigo = document.getElementById("tdprueba");
let botonGuardarF = document.getElementById("botonGuardar");
let comprador = document.getElementById("comprador");
let receptor = document.getElementById("receptor");



const pattern = /^([2020-2022]{4})-([1-12]{2})-([A-Z]{1})-([0-9]{4})$/;

const opValidacion = () => {
  let adverP = document.getElementById("adverOP");
  if (opcion.value === "Ninguno") {
    if (adverP === null) {
      let advertencia = document.createElement("P");
      advertencia.id = "adverOP";
      advertencia.style.color = "red";
      advertencia.style.fontSize = "small";
      advertencia.innerHTML = "NO puede contener ese valor";

      tdOpcion.appendChild(advertencia);

      setTimeout(() => {
        tdOpcion.removeChild(advertencia);
      }, 2500);
    }

    return false;
  }
  return true;
};

const canValidacion = () => {
  let adverP = document.getElementById("adverCan");
  if (+cantidad.value > 30 || +cantidad.value < 0 || cantidad.value == "") {
    if (adverP === null) {
      let advertencia = document.createElement("P");
      advertencia.id = "adverCan";
      advertencia.style.color = "red";
      advertencia.style.fontSize = "small";
      advertencia.innerHTML = "la cantidad debe ser menor de 30 y mayor que 0";

      tdCan.appendChild(advertencia);

      setTimeout(() => {
        tdCan.removeChild(advertencia);
      }, 3500);
    }
    return false;
  }
  return true;
};

const porcValidacion = () => {
  let adverP = document.getElementById("adverPorc");
  if (+porcdescuento.value > 50) {
    if (adverP === null) {
      let advertencia = document.createElement("P");
      advertencia.id = "adverPorc";
      advertencia.style.color = "red";
      advertencia.style.fontSize = "small";
      advertencia.innerHTML = "NO puede ser mayor de 50";

      tddescuento.appendChild(advertencia);

      setTimeout(() => {
        tddescuento.removeChild(advertencia);
      }, 4500);
    }
    return false;
  }
  return true;
};
const validacionCodigo = () => {
  let adverP = document.getElementById("advercodigo");
  if (pattern.test(codigofactura.value) == false) {
    if (adverP === null) {
      let advertencia = document.createElement("P");
      advertencia.id = "advercodigo";
      advertencia.style.color = "red";
      advertencia.style.fontSize = "small";
      advertencia.innerHTML =
        "El numero de factura debe ser el siguiente formato 2020-12-A-1234";

      tdvalCodigo.appendChild(advertencia);

      setTimeout(() => {
        tdvalCodigo.removeChild(advertencia);
      }, 4500);
    }
    return false;
  }
  return true;
};

function validaciones() {
  let x = opValidacion();
  let y = canValidacion();
  let z = porcValidacion();
  //let s = validacionCodigo();
  if (x && y && z) {
    return true;
  } else {
    return false;
  }
}

function calcularTotal() {
  //este es el total a pagar por el producto
  let total = +cantidad.value * +precioUni.value;
  let descuento = total * (+porcdescuento.value / 100);
  total += +costimporte.value;
  total = total - descuento;
  return total;
}

function totalFactura() {
  // este es el total completo de toda la factura
  let total = 0;
  let hijo;
  for (let i = 1; i < tabla.childElementCount; i++) {
    hijo = tabla.querySelector(`#filaN${con}`);
    total += +hijo.children[7].innerHTML;

  }
  alert(total);
  return total;

}

const AñadirProducto = (e) => {
  e.preventDefault();

  if (validaciones() == true) {
    let producto = {
      idProducto: (con += 1),
      nomproducto: opcion.value,
      descrip: descripcion.value,
      cantidad: cantidad.value,
      descuento: porcdescuento.value,
      precio: precioUni.value,
      importe: costimporte.value,
    };

    if (BuscarProducto(producto) == false) {
      let idProducto = document.createElement("td");
      idProducto.innerHTML = con;

      let nomprotd = document.createElement("td");
      nomprotd.innerHTML = producto.nomproducto;

      let descripciontd = document.createElement("td");
      descripciontd.innerHTML = producto.descrip;

      let cantidadtd = document.createElement("td");
      cantidadtd.innerHTML = producto.cantidad;

      let preciotd = document.createElement("td");
      preciotd.innerHTML = producto.precio;

      let descuentotd = document.createElement("td");
      descuentotd.innerHTML = producto.descuento;

      let importetd = document.createElement("td");
      importetd.innerHTML = producto.importe;

      let total = document.createElement("td");
      total.innerHTML = calcularTotal();

      let botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = "Eliminar";
      botonEliminar.className = "button is-small is-danger";
      botonEliminar.id = `botonEliminar${con}`;
      botonEliminar.setAttribute("onclick", `Eliminar(${con})`);
      console.log("contador" + con);
      console.log(botonEliminar);
      let fila = document.createElement("tr");
      fila.id = `filaN${con}`;

      fila.appendChild(idProducto);
      fila.appendChild(nomprotd);
      fila.appendChild(descripciontd);
      fila.appendChild(cantidadtd);
      fila.appendChild(preciotd);
      fila.appendChild(descuentotd);
      fila.appendChild(importetd);
      fila.appendChild(total);
      fila.appendChild(botonEliminar);

      console.log(producto);
      tabla.appendChild(fila);

      datos.add(producto);

      console.log(datos);
    } else {
      adverRep.style.color = "red";
      adverRep.style.fontSize = "medium";
      adverRep.innerHTML =
        "Los productos no se pueden repetir / ni los codigos";
      setTimeout(() => {
        adverRep.innerHTML = "";
      }, 3500);
    }
  }
};

const Eliminar = (id) => {
  const elemento = document.getElementById(`filaN${id}`);
  tabla.removeChild(elemento);

  for (let obj of datos) {
    if (obj.idProducto == id) {
      console.log(obj.idProducto);
      datos.delete(obj);
      break;
    }
  }
  console.log(datos);
};

function BuscarProducto(producto) {
  for (let productoI of datos) {
    if (
      productoI.nomproducto == producto.nomproducto ||
      productoI.idProducto == producto.idProducto
    ) {
      return true;
    }
  }
  return false;
}

const GuardarFactura = () => {
  if (validacionCodigo() == true) {

    let arrayDatos = [...datos];
    let valores = JSON.stringify(arrayDatos);
    fetch('bd.php', {
      method: 'POST',
      body: valores,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));




    /*
        let factura = {
          IdFactura: codigofactura.value,
          ConjuntoDatos: datos,
          compradorr: comprador.value,
          receptorr: receptor.value,
          //totalaPagar: totalFactura()
        };
        */
  }
};

const BuscarFactura = () => {

  function obtenerUsuario(id) {
    // Crea una nueva petición Fetch con el método GET y la URL de la API
    fetch(`api/usuarios.php?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Si la respuesta no es satisfactoria, lanza un error
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // Si la respuesta es satisfactoria, la devuelve como un objeto JSON
      return response.json();
    })
    .then(usuario => {
      // Accede a las propiedades del objeto
      console.log(usuario.nombre);
      console.log(usuario.apellido);
      console.log(usuario.email);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
}


botonBuscar.addEventListener("click", BuscarFactura)
botonGuardarF.addEventListener("click", GuardarFactura);
envio.addEventListener("click", AñadirProducto);
botonBuscar.addEventListener("click", BuscarProducto);
botonEliminar.addEventListener("click", Eliminar);
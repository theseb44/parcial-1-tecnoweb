<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "proyecto-web-1";

$conexion = mysqli_connect($servername, $username, $password, $database);
if ($conexion) {
    echo "base de datos conectada";
} else {
    echo "no se conecto";
}
$json = file_get_contents('php://input');

$objetos = json_decode($json);


echo var_dump($objetos);

foreach ($objetos as $objeto) {
    $idProducto=$objeto->idProducto . "\n";
    $nomproducto= $objeto->nomproducto . "\n";
    $descrip= $objeto->descrip . "\n";
    $cantidad =$objeto->cantidad . "\n";
    $descuento= $objeto->descuento . "\n";
    $precio= $objeto->precio . "\n";
    $importe= $objeto->importe . "\n";

    $sql= "INSERT INTO factura (Nombre, Enviar_a, N_factura, Producto, Descripcion, Cant, Precio_unitario, descuento, Importe) VALUES('luis','jose','$idProducto','$nomproducto','$descrip', '$cantidad','$precio', '$descuento','$importe')";

    mysqli_query($conexion,$sql);
}






?>
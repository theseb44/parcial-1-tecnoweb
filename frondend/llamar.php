
<!DOCTYPE html>
<html>
<head>
    <title>Productos</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Productos</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Descuento</th>
                <th>Precio</th>
                <th>Importe</th>
            </tr>
        </thead>
        <tbody>
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
                $sql = "SELECT * FROM factura";
                $resultado = mysqli_query($conexion, $sql);

                if (mysqli_num_rows($resultado) > 0) {
                    while($row = mysqli_fetch_assoc($resultado)) {
                        $idProducto = $row["id"];
                        $nomproducto = $row["Producto"];
                        $descrip = $row["Descripcion"];
                        $cantidad = $row["Cant"];
                        $descuento = $row["descuento"];
                        $precio = $row["Precio_unitario"];
                        $importe = $row["Importe"];
                        echo "<tr>";
                        echo "<td>" . $idProducto . "</td>";
                        echo "<td>" . $nomproducto . "</td>";
                        echo "<td>" . $descrip . "</td>";
                        echo "<td>" . $cantidad . "</td>";
                        echo "<td>" . $descuento . "</td>";
                        echo "<td>" . $precio . "</td>";
                        echo "<td>" . $importe . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "No se encontraron productos.";
                }

                mysqli_close($conexion);
            ?>
        </tbody>
    </table>
</body>
</html>
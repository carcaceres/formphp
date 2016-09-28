<?php
include('../config/configdb.php');

$user=$_POST["usuarioparam"];
if($user=='todos'){
	$sql="select user,pass,nomrol from vistausuarios";
}
else{

$sql="select user,pass,nomrol from vistausuarios where user='".$user."'";
}

if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
} 

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table class='table table-bordered table-striped'><tr><th>Usuario</th><th>Password</th><th>Rol</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["user"]."</td><td>".$row["pass"]."</td><td>".$row["nomrol"]."</td></tr>";
    }
    echo "</table>";
} else {
	 echo "<center><strong><h3>Resultado No Encontrado</h3></strong></center>";
}
$conn->close();

?>
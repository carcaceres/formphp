<?php






session_start();
$user=$_SESSION["user"];
echo 'Bienvenido Rol Estudiante '.$user;

?>




<htlml>

<body>


<a href="/validar/logout.php">Cerrar Sesion</a>


</body>


</htlml>








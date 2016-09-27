
<html>
<head>
<link rel="icon" href="/validar/assets/images/icon/favicon.png" type="image/x-icon"/>
</head>
<?php






session_start();
$user=$_SESSION["user"];
echo 'Bienvenido Rol Admin '.$user;

?>




<htlml>

<body>


<a href="/validar/logout.php">Cerrar Sesion</a>


</body>


</html>








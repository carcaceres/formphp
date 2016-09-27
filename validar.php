
<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<?php
include('/config/configdb.php');
$user=$_POST['userparam'];
$pass=$_POST['passparam'];
$rol=$_POST['rolparam'];
session_start();


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
   
}

$sql = "SELECT user,pass FROM login where user='".$user."' and pass='".$pass."' and rol=".$rol;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) ==1 && $rol==1) {
   
  	$_SESSION["user"]=$user; 
	header('Location: /validar/admin/redireccion.php');

} 
else if (mysqli_num_rows($result) ==1 && $rol==2) {
   
  	
  	$_SESSION["user"]=$user; 
	header('Location: /validar/tutor/redireccion.php');
} 
else if (mysqli_num_rows($result) ==1 && $rol==3) {
   
  	$_SESSION["user"]=$user; 
	header('Location: /validar/estudiante/redireccion.php');
} 

else {
	  echo '<strong>CREDENCIAL INCORRECTA</strong>';
	  echo '<br/>';
	  echo '<br/>';
}

mysqli_close($conn);



?>
</html>
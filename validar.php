<?php
include('/config/configdb.php');
$user=$_POST['userparam'];
$pass=$_POST['passparam'];
$rol=$_POST['rolparam'];
session_start();

echo '<br/>';

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
   
}

$sql = "SELECT user,pass FROM login where user='".$user."' and pass='".$pass."' and rol=".$rol;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) ==1 && $rol==1) {
   
  echo 'credencial correcta';
	$_SESSION["user"]=$user; 
	header('Location: /validar/admin/redireccion.php');
} 
else if (mysqli_num_rows($result) ==1 && $rol==2) {
   
  echo 'credencial correcta';
	$_SESSION["user"]=$user; 
	header('Location: /validar/tutor/redireccion.php');
} 
else if (mysqli_num_rows($result) ==1 && $rol==3) {
   
  echo 'credencial correcta';
	$_SESSION["user"]=$user; 
	header('Location: /validar/estudiante/redireccion.php');
} 

else {
   echo 'credencial incorrecta';
}

mysqli_close($conn);



?>
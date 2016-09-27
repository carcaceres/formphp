

/////////////////////////////////////////////////////////////////////////////////////////////////

/// funcion eliminar Mensaje 1

////////////////////////////////////////////////////////////////////////////////////////////////
function eliminarMensaje1() {
    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje1').innerHTML="";
}
/////////////////////////////////////////////////////////////////////////////////////////////////

/// funcion eliminar Mensaje 2

////////////////////////////////////////////////////////////////////////////////////////////////
function eliminarMensaje2() {
    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje2').innerHTML="";
}



$(document).ready(function(){


     $("#Loading").hide();
     
/////////////////////////////////////////////////////////////////////////////////////////////////

/// click enviar

////////////////////////////////////////////////////////////////////////////////////////////////

    $("#enviar").click(function(){
      $("#Loading").show();
  $("#Loading").fadeIn(); //show when submitting
          
     var userval=document.getElementById("user").value
     var passval=document.getElementById("pass").value;
     var rolval=document.getElementById("rol").value;



if(userval==''){
      document.getElementById('mensaje1').innerHTML="Campo Usuario Vacio!!";
      document.getElementById("mensaje1").style.color = "red";
}  
if(passval==''){
      document.getElementById('mensaje2').innerHTML="Campo Password Vacio!!";
      document.getElementById("mensaje2").style.color = "red";
}

if((userval!='') && (passval!='')){

        $.post("validar.php",
        {
          userparam: userval,
          passparam:passval,
          rolparam:rolval
        },
        function(data,status){
         //   alert("Data: " + data + "\nStatus: " + status); 
            $("#mostrar").html(data);         
            $("#Loading").fadeOut('fast'); //hide when data's ready
        });
    }

    });

/////////////////////////////////////////////////////////////////////////////////////////////////

/// click limpiar

////////////////////////////////////////////////////////////////////////////////////////////////

    $("#limpiar").click(function(){

    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje1').innerHTML="";
    document.getElementById('mensaje2').innerHTML="";
    document.getElementById('user').value=""; 
    document.getElementById('pass').value="";
    document.getElementById('user').focus();
    document.getElementById("rol").selectedIndex = "0";
 
    });



});
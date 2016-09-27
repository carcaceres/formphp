

/////////////////////////////////////////////////////////////////////////////////////////////////

/// funcion eliminar Mensaje 1

////////////////////////////////////////////////////////////////////////////////////////////////
function eliminarMensaje1() {
    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje1').innerHTML="";
    ocultarMensaje()
}
/////////////////////////////////////////////////////////////////////////////////////////////////

/// funcion eliminar Mensaje 2

////////////////////////////////////////////////////////////////////////////////////////////////
function eliminarMensaje2() {
    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje2').innerHTML="";
    ocultarMensaje();
  }


function ocultarMensaje(){
   $("#mostrar").hide();

}


$(document).ready(function(){


     $("#Loading").hide();
     $("#mostrar").hide();
     
/////////////////////////////////////////////////////////////////////////////////////////////////

/// click enviar

////////////////////////////////////////////////////////////////////////////////////////////////

    $("#enviar").click(function(){
     $("#Loading").show();
    $("#Loading").fadeIn(); //muestra imagen de cargar
          
     var userval=document.getElementById("user").value
     var passval=document.getElementById("pass").value;
     var rolval=document.getElementById("rol").value;



if(userval==''){
      document.getElementById('mensaje1').innerHTML="Campo Usuario Vacio!!";
      document.getElementById("mensaje1").style.color = "red";
       $("#Loading").fadeOut('fast'); //oculta imagen de cargar
      
}  
if(passval==''){
      document.getElementById('mensaje2').innerHTML="Campo Password Vacio!!";
      document.getElementById("mensaje2").style.color = "red";
       $("#Loading").fadeOut('fast'); //oculta imagen de cargar
   
}

if((userval!='') && (passval!='')){

        $.post("validar.php",
        {
          userparam: userval,
          passparam:passval,
          rolparam:rolval
        },
        function(data,status){

            $("#mostrar").show();
            $("#mostrar").html(data);         
            $("#Loading").fadeOut('fast'); //oculta imagen de cargar
            console.log("datos "+data);
             if(data[54]=='0'){
                $("#mostrar").hide();
                }
            
        });
    }

    });

/////////////////////////////////////////////////////////////////////////////////////////////////

/// click limpiar

////////////////////////////////////////////////////////////////////////////////////////////////

  $("#limpiar").click(function(){
  $("#Loading").show();
  $("#Loading").fadeIn(); //muestra imagen de cargar
    document.getElementById('mostrar').innerHTML="";
    document.getElementById('mensaje1').innerHTML="";
    document.getElementById('mensaje2').innerHTML="";
    document.getElementById('user').value=""; 
    document.getElementById('pass').value="";
    document.getElementById('user').focus();
    document.getElementById("rol").selectedIndex = "0";
      $("#mostrar").hide();
    $("#Loading").fadeOut('fast'); //oculta imagen de cargar
    
    });


/////////////////////////////////////////////////////////////////////////////////////////////////

/// click ocultar mensaje mostrar

////////////////////////////////////////////////////////////////////////////////////////////////

$("#mostrar").click(function(){
  ocultarMensaje(); 
    });



});
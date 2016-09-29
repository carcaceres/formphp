// funciom mostrar busquedad

function mostrar(){

      var userval=document.getElementById("usuario").value; 

  $.post("./busqueda/busqueda.php",
        {
          usuarioparam: userval
        },
        function(data,status){
            

            $("#resultado").html(data);    
/*
            for(var i in data){
              console.log(data[i]);
            }
 */

     $("#Loading").hide();

            
        });  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#Loading").hide();

$("#buscar").click(function(){
 $("#Loading").show();
mostrar();
});	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#usuario").click(function(){

    

    document.getElementById('resultado').innerHTML="";
});
/*
$( "#usuario" ).keypress(function() {
   
   mostrar();
});

*/


});

 





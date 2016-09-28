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
            
        });  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){


$("#buscar").click(function(){

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


$( "#usuario" ).keyup(function() {
   console.log($(this).val().length);
   if($(this).val().length==0){
     document.getElementById('resultado').innerHTML="";
   }
   else{
  mostrar();
}
});

});

 





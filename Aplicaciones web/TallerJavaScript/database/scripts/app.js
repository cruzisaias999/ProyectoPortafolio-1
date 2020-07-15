// Jquery
$(document).ready(function(){
    $('#save').click(function(){
        var datauser = $('obtenerdatos').serialize();
        $.ajax({
           type:"POST",
           url:"guardar.php",
           data: datauser,
           success:function(res){
               if(res == 1){
                   alert("Se han registrado los datos correctamente...");
               }else{
                   alert("Algo falló, consulte al desarrollador...");
               }
           }
        });
        return false;
      })
   })
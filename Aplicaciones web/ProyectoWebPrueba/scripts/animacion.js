$(document).ready(function(){
    $('a[href="#"]').click(function(){
        let destino = $(this.hash)
        if (destino.length == 0){
            destino=$('a[name="'+ this.hash.substr(1) +'"]')
        }
        if (destino.length ==0)        
    })
})
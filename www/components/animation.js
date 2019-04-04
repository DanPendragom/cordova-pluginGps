$('#procurarLocal').on('click' , function(){
    if($('.paginaStyle').height() == 30){
         $('.paginaStyle').animate({"height" : "200px"}, 200);
    }else{
        $('.paginaStyle').animate({"height" : "100%"}, 200);
    }
    alert("funciona?");
});
$(document).ready(function(){
    // Activar carrusel
    $("#myCarousel").carousel("pause");

    // Devolver al item anterior
    $("#myBtn").click(function(){
    	$("#myCarousel").carousel("prev");
    });

    // Pasar al siguiente item
    $("#myBtn2").click(function(){
    	$("#myCarousel").carousel("next");
    });
    
    // Indicadores del carrusel
    $(".item1").click(function(){
    	$("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
    	$("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
    	$("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
    	$("#myCarousel").carousel(3);
    });
    
    // Control de Flechas avanzar hacia la derecha o retroceder a la izquierda
    $(".left").click(function(){
    	$("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
    	$("#myCarousel").carousel("next");
    });
});
// DOCUMENTO CARGANDO

$(window).on("load",function(){

 loading();

});


// DOCUMENTO LISTO

$(document).on("ready",function(){
    slider();
    fitBackground();
} );

// LISTA DE FUNCIONES 

function slider(){

var currentIndex = 0,
  items = $('.description-section  div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.description-section div').eq(currentIndex);
  items.hide();
  item.fadeIn("slow");
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

 console.log("checkpoint-2");
}



function loading(){

  console.log("checkpoint-4");
  $(".loading").fadeOut("");

}


// FUNCION QUE AJUSTA EL ANCHO DEL BACKGROUND SIN DEFORMAR
function fitBackground(){

  var img = new Image ;
  img.src = $('body').css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
  $(img).load(function() {
    var bgWidth = img.width;
    var bgHeight = img.height;

    console.log("wbg:"+bgWidth+"  hbg:"+bgHeight) ;

    var wdHeight = $(window).height();
  var wdWidth = $(window).width();

  console.log("wWd:"+wdWidth+"  hWd:"+wdHeight ) ;

if( (wdWidth-wdHeight) > 0 ){
     // if que determina si la pantalla es mas ancha que alta
    console.log("pantalla mas ancha que alta");

    if( (wdWidth- wdHeight) > (bgWidth-bgHeight) ){

      $("body").css("background-size","100% auto");
 
     }else{


         $("body").css("background-size"," auto  100%");
 
     };
  
   }else{ 
       console.log("pantalla mas alta que ancha");

       if( (wdHeight- wdWidth) > (bgHeight-bgWidth) ){

      $("body").css("background-size"," auto 100%");
 
     }else{


         $("body").css("background-size","100%  auto");
 
     };

   }
     
   }) ;
 
   
 };

// TERMINA FUNCION 

function fitBackgroundtest(){

  var img = new Image ;
  img.src = $('body').css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
  $(img).load(function() {
    var bgWidth = img.width;
    var bgHeight = img.height;

    console.log("wbg:"+bgWidth+"  hbg:"+bgHeight) ;

    var wdHeight = $(window).height();
  var wdWidth = $(window).width();

  console.log("wWd:"+wdWidth+"  hWd:"+wdHeight ) ;

  

  if( (wdWidth-wdHeight) > 0 ){
    // if que determina si la pantalla es mas ancha que alta
   console.log("pantalla mas ancha que alta");
   if( wdHeight > bgHeight){
        var aux = (100/wdHeight) * bgHeight;

        $("body").css("background-size", aux+"% auto");

    }else{
        var aux = ((100/bgHeight) * wdHeight)+100;

        $("body").css("background-size", aux+"% auto");

    };
  
  }else{ 
      console.log("pantalla mas alta que ancha");
       if( wdWidth > bgWidth){
        var aux = ((100/wdWidth) * bgWidth)+100;
        $('body').css("background-size", "auto"+ aux + "%" );
        console.log("se ajusto alto1");

        }else{
        var aux = ((100/bgWidth) * wdWidth)+100;
        $('body').css("background-size", "auto"+ aux +"%" );
        console.log("se ajusto alto2");
    };
  }
    
  }) ;

  
};


function ajustarAncho(){

   if( wdHeight > bgHeight){
        var aux = (100/bgHeight) * wdHeight;
        $("body").css("background-size", +100+aux+ "% auto");

        console.log("se ajusto ancho1");

    }else{
        var aux = (100/wdHeight) * bgHeight;
        $('body').css('background-size', +100+aux+"% auto");
        console.log("se ajusto ancho2");
    };

};


function ajustarAlto(){


       if( wdWidth > bgWidth){
        var aux = ((100/wdWidth) * bgWidth)+100;
        $('body').css('background-size', "auto"+ aux + "%" );
        console.log("se ajusto alto");

        }else{
        var aux = ((100/bgWidth) * wdWidth)+100;
        $('body').css('background-size', "auto"+ aux+"%" );
        console.log("se ajusto alto");
    };

};

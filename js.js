// DOCUMENTO CARGANDO

$(window).on("load",function(){

 console.log('%c Welcome!! This is Melania ', 'background: #FFF; color: #FF69B4');

 loading();
  SameHeight();

});

//$( window ).resize(function() {
//   fitBackground();
//});


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


}



function loading(){

  var anchoIcono =$(".loading").width();
  var anchoPagina =$( window ).width();

  var total = anchoPagina/2 - anchoIcono/2;

  $(".loading").css('margin-left', total+'px');

  $(".loading").fadeOut("");

}


function fitBackground(){

	var img = new Image ;
	try{
		img.src = $('.bg-fit').css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
	}catch(err){

	}
	$(img).load(function() {
    var bgWidth = img.width;
    var bgHeight = img.height;

   // console.log("wbg:"+bgWidth+"  hbg:"+bgHeight) ;

    var wdHeight = $(window).height();
	var wdWidth = $(window).width();
	var docHeight = $(document).height();
	var docWidth = $(document).width();

	//console.log("WdWin:"+wdWidth+"  heiWin:"+wdHeight ) ;
	//console.log("WdDoc:"+docWidth+"  heiDoc:"+docHeight ) ;

if( (wdWidth-wdHeight) > 0 ){

     // if que determina si la pantalla es mas ancha que alta
    //console.log("pantalla mas ancha que alta");

  if( (wdWidth- wdHeight) > (bgWidth-bgHeight)){


					if(docHeight > wdHeight){

						if(bgHeight < wdHeight){
							$(".bg-fit").css("background-size","auto 100%  ");
							//console.log("pantalla0");
						}else{
							$(".bg-fit").css("background-size","100% auto ");
							//console.log("pantalla 0.5");
						}
					}else {
								$(".bg-fit").css("background-size","100% auto");
							//	console.log("DOCUMENTO IGUAL");
					};


    }else{

			// LA PARTE APAISADA TIENE QUE ENTRAR ACA

			 		if(docHeight > wdHeight) {

						if(bgHeight < wdHeight){
							$(".bg-fit").css("background-size","auto 100%  ");
							
						}else{
							$(".bg-fit").css("background-size","100% auto ");
							
						}
										// $("#home").css("background-size","auto 100% ");
										// console.log("pantalla1");


					}else{

						if(docHeight > bgHeight){
								$(".bg-fit").css("background-size","auto  100% ");
								//console.log("pantalla3");
						}else{
								if(bgHeight < wdHeight){
									$(".bg-fit").css("background-size","auto 100%  ");
									//console.log("pantalla4");
								}else{
									$(".bg-fit").css("background-size","130% auto ");
									
									//console.log("pantalla 5");

								}

						};

				 };
	};

//  ELSE QUE CALCULA EL ALTO


   }else{
       //console.log("pantalla mas alta que ancha");

       if( (docHeight- docWidth) > (bgHeight-bgWidth) ){

	
    	$(".bg-fit").css("background-size"," auto 100%");

     }else{


         $(".bg-fit").css("background-size","100%  auto");

     };

   }

   }) ;


 };


function fitBackgroundtest(){

  var img = new Image ;
  img.src = $('body').css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
  $(img).load(function() {
    var bgWidth = img.width;
    var bgHeight = img.height;

    // console.log("wbg:"+bgWidth+"  hbg:"+bgHeight) ;

    var wdHeight = $(window).height();
  var wdWidth = $(window).width();

  // console.log("wWd:"+wdWidth+"  hWd:"+wdHeight ) ;



  if( (wdWidth-wdHeight) > 0 ){
    // if que determina si la pantalla es mas ancha que alta
   //console.log("pantalla mas ancha que alta");
   if( wdHeight > bgHeight){
        var aux = (100/wdHeight) * bgHeight;

        $("body").css("background-size", aux+"% auto");

    }else{
        var aux = ((100/bgHeight) * wdHeight)+100;

        $("body").css("background-size", aux+"% auto");

    };

  }else{
     // console.log("pantalla mas alta que ancha");
       if( wdWidth > bgWidth){
        var aux = ((100/wdWidth) * bgWidth)+100;
        $('body').css("background-size", "auto"+ aux + "%" );
       // console.log("se ajusto alto1");

        }else{
        var aux = ((100/bgWidth) * wdWidth)+100;
        $('body').css("background-size", "auto"+ aux +"%" );
        //console.log("se ajusto alto2");
    };
  }

  }) ;


};


function ajustarAncho(){

   if( wdHeight > bgHeight){
        var aux = (100/bgHeight) * wdHeight;
        $("body").css("background-size", +100+aux+ "% auto");

        //console.log("se ajusto ancho1");

    }else{
        var aux = (100/wdHeight) * bgHeight;
        $('body').css('background-size', +100+aux+"% auto");
      //  console.log("se ajusto ancho2");
    };

};


function ajustarAlto(){


       if( wdWidth > bgWidth){
        var aux = ((100/wdWidth) * bgWidth)+100;
        $('body').css('background-size', "auto"+ aux + "%" );
       // console.log("se ajusto alto");

        }else{
        var aux = ((100/bgWidth) * wdWidth)+100;
        $('body').css('background-size', "auto"+ aux+"%" );
     //   console.log("se ajusto alto");
    };

};


function ResetHeight(){
    var id=1;
    while($( "[hid="+id+"]" ).length||id<20){

      $("[hid="+id+"]").css("height","auto");
      id++;
    }
  }

  var headerHeight=0;
  var distanceHeader=0;
  //SetDistanceHeader();

  function SameHeight(){
    //console.log("entra same height");
    var auxId=1;
    while($( "[hid="+auxId+"]" ).length||auxId<20){
      var hidHeight=0;
      //ResetHeight();
      $("[hid="+auxId+"]").each(function(){
        if($(this).innerHeight()>hidHeight){
          hidHeight= $(this).innerHeight();
        }

      });
      //console.log(hidHeight);
      $("[hid="+auxId+"]").css("height",hidHeight+"px");
      auxId++;
    }
  }

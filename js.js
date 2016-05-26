// DOCUMENTO CARGANDO

$(window).on("load",function(){

 loading();

});


// DOCUMENTO LISTO

$(document).on("ready",function(){
    slider();
} );

// LISTA DE FUNCIONES 

function slider(){

var currentIndex = 0,
  items = $('.description-section div'),
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
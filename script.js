var sidemenu = document.getElementById("sidemenu");
 function openmenu(){
     sidemenu.style.right = "0"
 }
 function closemenu(){
     sidemenu.style.right = "-200px",
     sidemenu.style.zIndex= "999"
 }



 $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                
            },
            1000:{
                items:3,
            }
        }
    })
 })







 var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });


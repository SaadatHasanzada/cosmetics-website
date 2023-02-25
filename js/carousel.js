
const swiper = new Swiper('.swiper1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});



// Banner carousel


// slick slider

$('.swiper-container').slick({
  mobileFirst:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  prevArrow:'<img src="./assets/images/arrow-left.svg" class="left_arrow">',
  nextArrow:'<img src="./assets/images/arrow-right.svg" class="right_arrow">',
  responsive: [
    {
      breakpoint: 600,
      settings: {
       
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 968,
      settings: {
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }
    
   
  ]

});










 
 




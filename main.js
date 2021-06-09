$(document).ready(function(){
    $('.project-container').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,       
            prevArrow:"<img class='a-left control-c prev slick-prev' src='images/arrow-left.png' alt='freccia a sinistra'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='images/arrow-right.png' alt='freccia a destra'>"                     
    });
  });
  
/**
* Template Name: Leaping Boundaries
* Template URL: https://
* Author: 
* 
*/


// Sidebar Js


function openNav() {
    document.getElementById("sidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

// Carousel Slider Js
var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
})








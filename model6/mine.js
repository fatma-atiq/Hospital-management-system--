$(document).ready(function () {

    "use strict";

    $('.machine .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })


    $('.mycontent .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })







    // window Scroll functions

    var navbarOffset = $(".navbar").offset().top;

    $(window).scroll(function(){
        var wScroll = $(window).scrollTop();

        if(wScroll > navbarOffset){
            $(".navbar").css("backgroundColor","#121212")
        }else{
            $(".navbar").css("backgroundColor","Transparent")
        }
     
    })






      

})




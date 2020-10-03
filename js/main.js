$(function(){
    $('.sub-menu').hover(
        function(){
            $('ul.drop-down:not(:animated)', this).fadeIn(300);
        },
        function() {
            $('ul.drop-down:not(:animated)', this).fadeOut(300);
        }
    )
})
$(function () {
    $('.btn-menu').click(
        function () {
            $('.mobile-menu-block').show(100);
        }
    )
})
$(function () {
    $('.btn-close-menu').click(
        function () {
            $('.mobile-menu-block').hide(100);
        }
    )
})
$(function () {
    $('.mobile-nav-item').click(
        function () {
            $('.mobile-drop-down:not(:animated)', this).slideDown(300);
        }
    )
})
$(function () {
    $('.mobile-nav-item').click(
        function () {
            $('.mobile-drop-down:not(:animated)', this).slideUp(300);
        }
    )
})

// inintialize Slick Slider 

$(document).ready(function () {
    $('.slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
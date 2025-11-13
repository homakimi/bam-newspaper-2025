$(function() {
    // for nanshan
    if($('header').length > 0) {
        headerHeight = 55;
    } else {
        headerHeight = 0;
    }

    new Swiper('.newspaper-swiper .swiper', {
        speed: 500,
        spaceBetween: 50,
        navigation: {
            nextEl: '.newspaper-swiper .swiper-button-next',
            prevEl: '.newspaper-swiper .swiper-button-prev',
        },
        pagination: {
            el: '.newspaper-swiper .swiper-pagination',
            type: 'fraction',
        },
        on: {
            'slideChangeTransitionStart': function() {
                $('body, html').animate({scrollTop: 0}, 500)
            }
        }
    });
})


$(document)
.on('click', 'a', function(e) {
    if($(this).attr('href').length == 0) {
        e.preventDefault();
        e.stopPropagation();
    }
})
.on('mousedown', 'img', function(e) {
    e.preventDefault();
})

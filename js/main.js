$(function() {
    // for nanshan
    if($('header').length > 0) {
        headerHeight = 55;
    } else {
        headerHeight = 0;
    }

    urlDetect();


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


function urlDetect() {
    if(window.location.href.indexOf('pin') > 0) {
        var _url = new URL(window.location.href);
        var _searchParams = _url.searchParams.get('pin');
        if($('[data-pin="'+_searchParams+'"]').length > 0) {
            setTimeout(function() {
                $('body, html').animate({ scrollTop: $('[data-pin="'+_searchParams+'"]').offset().top - headerHeight }, 1000);
            }, 250)
        }
    }
}
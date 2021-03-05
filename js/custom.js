// JavaScript Document

// owlCarousel
$(document).ready(function () {
    $("#owl-slide").owlCarousel({
        goToFirstSpeed: 200,
        slideSpeed: 200,
        autoPlay: true,
        items: 4,
        navigation: true,
        navigationText: ["", ""],
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    $("#owl-slide-2").owlCarousel({
        goToFirstSpeed: 200,
        slideSpeed: 80,
        autoPlay: true,
        items: 4,
        navigation: true,
        navigationText: ["", ""],
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    jQuery.scrollSpeed(100, 800);
});

/* Front slider */
jQuery(function () {

    jQuery('#camera_wrap_4').camera({
        height: '40%',
        loader: 'none',
        pagination: false,
        thumbnails: false,
        playPause: false,
        pauseOnClick: false,
        hover: false,
        fx: 'mosaic',
        opacityOnGrid: false,
        imagePath: '../../images/site'
    });

});
/* Front slider */

// Equal height

const equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        const topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(document).ready(function () {
    equalheight('.equal-height');

    new WOW().init();
});

// parallax-slider

$(window).on('load', function () {
    equalheight('.equal-height');

});

$(window).resize(function () {
    equalheight('.equal-height');
});

// Equal height

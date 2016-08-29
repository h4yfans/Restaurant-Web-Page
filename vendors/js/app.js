$(document).ready(function () {
    /* Maps*/
    var map = new GMaps({
        div: '.map',
        lat: 41.014825,
        lng: 28.942766,
        zoom: 17
    });

    map.addMarker({
        lat: 41.014825,
        lng: 28.942766,
        title: 'Rezzak Restaurant',
        infoWindow: {
            content: '<p>Rezzak Restaurant</p>'
        }
    });

    /*Panorama View*/
    var panorama = GMaps.createPanorama({
        el: '#panorama',
        lat: 41.014825,
        lng: 28.942766,
        pov: {
            heading: 224,
            pitch: 0
        },
        zoom: 2
    });

    /*Animatation while Scrolling*/
    $('.js--wp-1').waypoint(function (direciton) {
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('.js--wp-2').waypoint(function (direciton) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    $('.js--wp-3').waypoint(function (direciton) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    /*Sticky NavBar*/
    $('.about').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*Navigation scroll*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    
     /*Mobile nav*/
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);


    });
});
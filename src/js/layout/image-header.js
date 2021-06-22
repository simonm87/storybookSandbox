$(document).ready(function () {

    //if there is an image header on the page, set the min-height of the background image to the height of the header text 
    //(including button if exists, and padding top and bottom)

    if ($('.image__header').length) {
        var headerTextHeight = $('.image__header_overlay').outerHeight();
        $('.image__header').css('min-height', headerTextHeight);

    };

    //Image Header Heights
    if ($('#findawood_bg').length) {

        if ($('.mobile-nav-container').is(":visible")) {
            var woodImageHeight = window.innerHeight - $(".header").outerHeight();
            $('#findawood_bg').height(woodImageHeight);
        }
    }

    if ($('.image__header').length) {
        var imageHeight = window.innerHeight - $(".header").outerHeight();
        $('.image__header').height(imageHeight);
        $('.image__header').removeClass("image__header--initial-height");
    }

});


//These functions may require global scope

//------------------------------------------
//  IMAGE HEADER
//------------------------------------------

//Set the image header height to the viewport height minus the header


if ($('.image__header').length) {

    //resizeHeader();
    var imageTimer;
    var imageHeader = '.image__header';
    var viewHeight = window.innerHeight;

    //$(document).ready(function () {
    //    var headerTextHeight = $('.image__header_overlay').outerHeight();
    //    $('.image__header').css('min-height', headerTextHeight);
    //});



    $(window).on('resize', function (e) {
        clearTimeout(imageTimer);
        resizeTimer = setTimeout(function () {

            var resizedViewHeight = window.innerHeight;
            var heightChange;
            var percentageChange;

            //Check if height has changed significantly

            if (resizedViewHeight > viewHeight) {
                heightChange = resizedViewHeight - viewHeight;
                percentageChange = heightChange / viewHeight * 100;
            } else {
                heightChange = viewHeight - resizedViewHeight;
                percentageChange = heightChange / viewHeight * 100;
            }

            if (percentageChange > 20) {
                // resize the image header and reset viewport height
                resizeHeader(imageHeader);
                viewHeight = window.innerHeight;
            }

            //set the min-height of the background image to the height of the header text (including button if exists, and padding top and bottom)

            var headerTextHeight = $('.image__header_overlay').outerHeight();
            $('.image__header').css('min-height', headerTextHeight);

        }, 250);
    });
}

if ($('#findawood_bg').length) {

    resizeHeader();
    var woodTimer;
    var woodHeader = '#findawood_bg';

    $(window).on('resize', function (e) {
        clearTimeout(woodTimer);
        woodTimer = setTimeout(function () {
            resizeHeader(woodHeader);
        }, 250);
    });

}

function resizeHeader(headerElement) {
    var imageHeight = window.innerHeight - $(".header").outerHeight();
    $(headerElement).height(imageHeight);
}
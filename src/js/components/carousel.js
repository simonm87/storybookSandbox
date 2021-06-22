$(document).ready(function () {

    //------------------------------------------
    //  IMAGE SLIDER - Possibly legacy code
    //------------------------------------------

    if ($('.slider-for').length) {
        $('.slider-for').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
    }

    if ($('.slider-nav').length) {
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    //------------------------------------------
    //  IMAGE SLIDER ENDS - Possibly legacy code
    //------------------------------------------


});


//May require Global scope

if ($('.wt-gallery').length) {
    var galleryIsOpen = [];
    var wtGallery = ".wt-gallery";



    //Loop through each gallery
    $(wtGallery).each(function (index) {

        //Set initial gallery state to closed
        galleryIsOpen[index] = false;

        //Button indexing for gallery state
        $(this).siblings('.gallery-btn').attr('id', index);

        //Gallery counter handling
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var slideCount = $(this).siblings().find('.counter-txt');
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            slideCount.html(i + "/" + slick.slideCount);
        });

        //Set the height of each gallery based on the total height of the image plus the caption
        $(this).on('init', function () {

            var count = $('.wt-gallery__slide.slick-slide', this).length;
            var tallestCaption = 0;
            var totalHeight = 0;

            $('.wt-gallery__slide.slick-slide', this).each(function (i) {

                var imageHeight = $('.wt-gallery__slide__image', this).outerHeight();
                var captionHeight = $('figcaption', this).outerHeight();
                var slideHeight = imageHeight + captionHeight + 24; //24 is the margin-bottom of the image - if this changes in the styles, it will need changing here too

                if (captionHeight > tallestCaption) {
                    tallestCaption = captionHeight;
                }

                if (slideHeight > totalHeight) {
                    totalHeight = slideHeight;
                }

                $(this).height(totalHeight);

                if (count === i + 1) {
                    var marginCalc = tallestCaption / 2 + 12;
                    $(this).closest('.wt-gallery').find('.slick-prev').css('margin-top', -marginCalc);
                    $(this).closest('.wt-gallery').find('.slick-next').css('margin-top', -marginCalc);
                }
            });
        });

        //Apply slick to the gallery
        $(this).slick({
            lazyLoad: "ondemand",
            dots: false,
            infinite: true,
            arrows: true,
            draggable: false,
            swipe: false,
            swipeToSlide: false,
            touchMove: false,
            slidesToShow: 1,
            centerMode: true,
            speed: 500,
            focusOnSelect: true,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" role="button" aria-disabled="false" style="display: inline-block;"><img src="/images/left-arrow.svg" class="deck-arrow-icon" alt=""></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" role="button" style="" aria-disabled="false"><img src="/images/right-arrow.svg" class="deck-arrow-icon" alt=""></button>',
            responsive: [
                { breakpoint: 1200 },
                { breakpoint: 992 },
                { breakpoint: 768 },
                { breakpoint: 576 },
                { breakpoint: 476 },
                { breakpoint: 414 },
                { breakpoint: 411 },
                { breakpoint: 375 },
                { breakpoint: 360 },
                { breakpoint: 320 }

            ]
        });

        $(this).on('breakpoint', function (event, slick, breakpoint) {

            var count = $('.wt-gallery__slide.slick-slide', this).length;
            var tallestCaption = 0;
            var totalHeight = 0;

            $('.wt-gallery__slide.slick-slide', this).each(function (i) {

                var imageHeight = $('.wt-gallery__slide__image', this).outerHeight();
                var captionHeight = $('figcaption', this).outerHeight();
                var slideHeight = imageHeight + captionHeight + 24; //24 is the margin-bottom of the image - if this changes in the styles, it will need changing here too

                if (captionHeight > tallestCaption) {
                    tallestCaption = captionHeight;
                }

                if (slideHeight > totalHeight) {
                    totalHeight = slideHeight;
                }

                $(this).height(totalHeight);

                if (count === i + 1) {
                    var marginCalc = tallestCaption / 2 + 12;
                    $(this).closest('.wt-gallery').find('.slick-prev').css('margin-top', -marginCalc);
                    $(this).closest('.wt-gallery').find('.slick-next').css('margin-top', -marginCalc);
                }
            });
        });

        //Lazy loading for this gallery
        $(this).on("lazyLoaded", function (event, slick, image, imageSource) {
            var divSlide = $(image).siblings(".wt-gallery__slide__image");
            divSlide.css("background-image", 'url("' + imageSource + '")'); //replace with background instead

            if ($(divSlide).is(".wt-gallery__slide__image__small")) {
                divSlide.css('background-color', '#04443c'); //replace with background instead
                var w = image[0].width;
                var h = image[0].height;

                if (h > w) {
                    $(divSlide).addClass("wt-gallery__slide__image__small--portrait");
                }
            }
            image.remove(); // remove source
        });

    });

    //Set open or closed state for gallery when clicking on the button
    $(".gallery-btn").click(function () {
        var galleryButton = $(this);
        clickGallery(galleryButton);
    });

    //If image is clicked in closed state open the gallery
    $(".slick-track").on('click', '.wt-gallery__slide__image', function () {
        if ($(this).closest('.wt-gallery').is('.closed-state')) {
            var galleryButton = $(this).closest('.gallery-container').find('.gallery-btn');
            clickGallery(galleryButton);
        }
    });
}

//Open and closed function
function clickGallery(galleryButton) {
    var btnIndex = galleryButton.attr("id");
    if (galleryIsOpen[btnIndex] === false) {
        galleryIsOpen[btnIndex] = true;
        $(galleryButton).find('.close-txt').removeClass('d-none');
        $(galleryButton).find('.counter-txt').addClass('d-none');
        $(galleryButton).addClass('gallery-btn--close').removeClass('gallery-btn--open');
        $(galleryButton).find('.gallery-btn__close__icon').attr('src', '/images/layout/close-icon.svg');
        $(galleryButton).find('.gallery-btn__close__icon').attr('alt', 'Close gallery');
        $(galleryButton).next(wtGallery).removeClass('closed-state');
    } else {
        galleryIsOpen[btnIndex] = false;
        $(galleryButton).find('.close-txt').addClass('d-none');
        $(galleryButton).find('.counter-txt').removeClass('d-none');
        $(galleryButton).addClass('gallery-btn--open').removeClass('gallery-btn--close');
        $(galleryButton).find('.gallery-btn__close__icon').attr('src', '/images/layout/gallery.svg');
        $(galleryButton).find('.gallery-btn__close__icon').attr('alt', 'Open gallery');
        $(galleryButton).next(wtGallery).addClass('closed-state');
    }
    $(galleryButton).next(wtGallery).slick("slickSetOption", "draggable", galleryIsOpen[btnIndex], false);
    $(galleryButton).next(wtGallery).slick("slickSetOption", "swipe", galleryIsOpen[btnIndex], false);
    $(galleryButton).next(wtGallery).slick("slickSetOption", "swipeToSlide", galleryIsOpen[btnIndex], false);
    $(galleryButton).next(wtGallery).slick("slickSetOption", "touchMove", galleryIsOpen[btnIndex], false);
}
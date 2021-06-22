$(document).ready(function () {

    //IN PAGE NAV CONTAINER HEIGHT
    if ($('.inpage-navs-container').length) {
        var relativeHeight = $('.inpage-navs-container').outerHeight();
        $('.inpage-navs-container').css('min-height', relativeHeight);
    }


    //sticky mega nav
    var c, currentScrollTop = 0,
        navbar = $('#meganav'),
        navbarHeight = 0,
        topLinks = $('.top-links__wrapper'),
        inpageNav = $('.inpage-navs'),
        mobileNavbar = $('.header');
    headerElem = $('.header');

    //Get the appropriate navbar height
    function findNavHeight() {
        if ($('.mobile-nav-container').is(":visible")) {
            navbarHeight = mobileNavbar.outerHeight();
        } else {
            navbarHeight = navbar.outerHeight();
        }
    }

    findNavHeight();

    window.addEventListener("resize", function () {

        //Update inpage nav min-height
        if ($('.inpage-navs-container').length) {

            //Apply min-height on small device
            if ($('#mobile-nav-wrapper').is(":visible")) {
                var mobDeviceHeight = $('.inpage-navs-container').outerHeight();
                $('.inpage-navs-container').css('min-height', mobDeviceHeight);
            }

            //Apply min-height on large device
            if ($('#meganav').is(":visible")) {
                var largeDeviceHeight = $('#inpage-navs').outerHeight();
                $('.inpage-navs-container').css('min-height', largeDeviceHeight);
            }

        }

        findNavHeight();

        if ($(window).scrollTop() < topLinks.outerHeight()) {
            //Ensure the meganav is not shown at the top of the page above the header
            navbar.removeClass('scrollDown').removeClass('scrollUp');
        }
    });

    //If we tab to the top of the page ensure meganav is showing
    var skipMain = document.querySelector('.skip-main');
    skipMain.addEventListener('focus', function () {
        mobileNavbar.removeClass('scrollDown').removeClass('scrollUp');
        navbar.removeClass('scrollDown').removeClass('scrollUp');
    });

    $(window).scroll(function () {

        var a = $(window).scrollTop();
        var b = navbar.outerHeight();

        currentScrollTop = a;


        if (a < topLinks.outerHeight()) {
            //Ensure the meganav is not shown at the top of the page above the header
            navbar.removeClass('scrollDown').removeClass('scrollUp');
        }

        if (c < currentScrollTop && a > b + b) {

            inpageNav.css('top', 0);

            //If mobile mega nav is open keep it fixed
            if ($('.mobile-open').length) {
                mobileNavbar.removeClass('scrollUp').addClass('scrollDown');
                inpageNav.css('top', navbarHeight);
            } else {
                mobileNavbar.addClass('scrollUp').removeClass('scrollDown');
            }

            //If large mega nav is open keep it fixed
            if ($('.wtnav__dropdown.show').length) {
                navbar.removeClass('scrollUp').addClass('scrollDown');
                inpageNav.css('top', navbarHeight);
            } else {
                if (currentScrollTop > headerElem.outerHeight()) {
                    navbar.addClass('scrollUp').removeClass('scrollDown');
                }
            }

        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass('scrollUp').addClass('scrollDown');
            mobileNavbar.removeClass('scrollUp').addClass('scrollDown');

            //Sticky meganav is present push the inpage nav down
            if (inpageNav.hasClass('navbar-fixed')) {
                inpageNav.css('top', navbarHeight);
            } else {
                inpageNav.css('top', 0);
            }
        }

        //Desktop height of link
        if (c < topLinks.outerHeight()) {
            navbar.removeClass('scrollDown').removeClass('scrollUp');
            inpageNav.css('top', 0);
        }

        //Mobile navbar height
        if (c < navbarHeight) {
            if (!$('.mobile-open').length) {
                mobileNavbar.removeClass('scrollDown').removeClass('scrollUp');

            }
        }

        c = currentScrollTop;
    });


    (function ($) {
        $.fn.hasScrollBar = function () {
            return this.get(0).scrollWidth > this.width();
        };
    })(jQuery);





    //------------------------------------------
    //  IN-PAGE NAVIGATIONS
    //------------------------------------------

    let inpageNavLinks = document.querySelectorAll("#inpage-navs ul a");
    let mainSections = document.querySelectorAll("main > section");

    if (inpageNavLinks.length > 0) {
        doActiveNav(inpageNavLinks);
        doStickyInPageNav($('#inpage-navs').offset().top);
    }

    //Scroll to anchor
    $(document).delegate('a[data-inpagenav="true"], a[data-listingnav="true"]', 'click', function (e) {
        e.preventDefault();
        var elem = $($(this).attr('href'));
        var offsetAdjustment;
        var mobileDevice;

        //Calculate offset for mobile mega nav plus inpage nav
        if ($('#mobile-nav-wrapper').is(":visible")) {
            mobileDevice = true;
            offsetAdjustment = $('.header').outerHeight() + $('#inpage-navs').outerHeight();
        }

        //Calculate offset for large mega nav plus inpage nav
        if ($('#meganav').is(":visible")) {
            mobileDevice = false;
            offsetAdjustment = $('#meganav').outerHeight() + $('.inpage-navs-container').outerHeight();
        }


        if (elem[0].id == 'listing-top') {
            offsetAdjustment = 0;
        }


        /* check for broken link */
        if (elem.length)
            var scrollPosition;

        if ($(document).scrollTop() < elem.offset().top) {
            //Scrolling down the page

            if (mobileDevice) {
                //Is the meganav sticky?
                if ($('.header').hasClass('scrollDown')) {
                    //scrollPosition = elem.offset().top - $('#inpage-navs').outerHeight();
                    scrollPosition = elem.offset().top - 44;
                } else {
                    //scrollPosition = elem.offset().top - $('#inpage-navs').outerHeight();
                    scrollPosition = elem.offset().top - 44;
                }

            } else {
                //Large device
                scrollPosition = elem.offset().top - $('.inpage-navs-container').outerHeight();
            }

        } else {
            //Scrolling up the page

            if (mobileDevice) {
                //Is the meganav sticky?
                if ($('.header').hasClass('scrollDown')) {
                    scrollPosition = elem.offset().top - offsetAdjustment;
                } else {
                    //scrollPosition = elem.offset().top - offsetAdjustment - $('.header').outerHeight();
                    scrollPosition = elem.offset().top - $('#inpage-navs').outerHeight() - $('.header').outerHeight();
                }

            } else {
                scrollPosition = elem.offset().top - offsetAdjustment;
            }

        }

        $('html,body').animate({
            scrollTop: scrollPosition
        }, 600, function () {
            elem.focus();
        });

    });


    //Scroll the sticky inpage nav
    if ($('.inpage-navs').length) {
        $(window).scroll(function (event) {

            if ($('.navbar-fixed').length) {
                if ($('.navbar-fixed').find('.navbar-nav').hasScrollBar()) {

                    $('.inpage-navs__item__link.current').each(function (index) {

                        var navPosition = $('ul.navbar-nav').scrollLeft();
                        var linkPosition = $(this)[0].offsetLeft;

                        if (navPosition != linkPosition) {
                            scrollToPos = linkPosition - 16;
                            $('.navbar-nav').stop(true, false).animate({ scrollLeft: scrollToPos }, 300);
                        }
                    });
                }
            }
        });
    };


});


//These functions require Global Scope

//------------------------------------------
//  IN-PAGE NAVIGATIONS
//------------------------------------------


function doActiveNav(inpageNavLinks) {
    let lastId;
    let cur = [];



    window.addEventListener("scroll", function (event) {
        let fromTop = window.pageYOffset;

        Array.prototype.slice.call(inpageNavLinks).forEach(function (div, i) {

            let header = document.querySelector(div.hash);
            let section = header.parentElement;
            var offsetTop;
            var mobileDevice;
            var offsetAdjustment;
            var calcHeight;

            //Ensure the nav highlight stays until we have reached the next inpage nav link
            if (i !== inpageNavLinks.length - 1) {
                var thisSectionOffSet;
                var nextSectionOffSet;
                var nextIndex = i + 1;

                if ($(inpageNavLinks[i] && $(inpageNavLinks[i].hash)[0])) {
                    thisSectionOffSet = $(inpageNavLinks[i].hash)[0].offsetTop;
                }

                if ($(inpageNavLinks[nextIndex] && $(inpageNavLinks[nextIndex].hash)[0])) {
                    nextSectionOffSet = $(inpageNavLinks[nextIndex].hash)[0].offsetTop;
                }

                calcHeight = nextSectionOffSet - thisSectionOffSet;

            } else {

                var gapBetweenInPageNavAndFooter = $('footer').offset().top - ($(inpageNavLinks[i].hash)[0].offsetTop + $(inpageNavLinks[i].hash)[0].offsetHeight)

                calcHeight = section.offsetHeight + gapBetweenInPageNavAndFooter;
            }


            //Calculate offset for mobile mega nav plus inpage nav
            if ($('#mobile-nav-wrapper').is(":visible")) {

                mobileDevice = true;
                //offsetTop = section.offsetTop - 45;
                if ($('.header').hasClass('scrollDown')) {
                    //Meganav + inpagenav + 1
                    offsetTop = section.offsetTop - (64 + 44 + 1);
                } else {
                    //Inpagenav + 1
                    offsetTop = section.offsetTop - (44 + 1);
                }
            }

            //Calculate offset for large mega nav plus inpage nav
            if ($('#meganav').is(":visible")) {

                mobileDevice = false;
                if ($('#meganav').hasClass('scrollDown')) {
                    //Meganav + inpagenav + 1
                    offsetTop = section.offsetTop - (60 + 72 + 1);
                } else {
                    //Inpagenav + 1
                    offsetTop = section.offsetTop - (72 + 1);
                }
            }

            if (
                offsetTop <= fromTop &&
                offsetTop + calcHeight > fromTop
            ) {
                //Add highlight
                div.classList.add("current");
            } else {
                //Remove highlight
                div.classList.remove("current");
            }
        });
    });
}


function doStickyInPageNav(startH) {
    $(window).scroll(function () {

        var hdr;
        var lastLinkPosition;
        var lastLinkCalc;

        if ($('#mobile-nav-wrapper').is(":visible")) {
            hdr = $('#inpage-navs').offset().top + ($('#inpage-navs').height() - $("#inpage-navs li").last().outerHeight());
            lastLinkCalc = startH + $('.inpage-navs-container').height() - $("#inpage-navs li").last().outerHeight();
            lastLinkPosition = lastLinkCalc - $('header').height();
        } else {
            hdr = $('#inpage-navs').offset().top;
            lastLinkCalc = startH;
            lastLinkPosition = lastLinkCalc - $('#meganav').height();
        }


        if ($(window).scrollTop() > hdr) {
            //Add sticky nav class
            $('#inpage-navs').addClass('navbar-fixed');
        }

        if ($(window).scrollTop() < lastLinkPosition) {
            $('#inpage-navs').removeClass('navbar-fixed');
            $('#inpage-navs').css('top', 0);
        }
    });
}
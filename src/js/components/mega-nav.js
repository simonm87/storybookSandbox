$(document).ready(function () {
 
    //------------------------------------------
    //  NAVBAR
    //------------------------------------------

    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });

    ////////////////////////////////

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('ul.wtnav__top-level-links li.wtnav__dropdown').on('show.bs.dropdown', function () {
        $("#wtoverlay").toggleClass("nav-open");
        $("#at4-share").css("z-index", "100");
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('ul.wtnav__top-level-links li.wtnav__dropdown').on('hide.bs.dropdown', function () {
        $("#wtoverlay").toggleClass("nav-open");
        $("#at4-share").css("z-index", "102");
    });

    //If checkboxes are cached then reset
    if ($('.menu-checkbox').length) {
        $('.menu-checkbox').each(function (index) {
            this.checked = false;
        });
        $(".menu").removeClass("d-none");
    }

    $(".header-menu-toggle").click(function () {
        $(".header-menu-toggle").toggleClass("mobile-open");
        $(".nav-search").toggleClass("closed");
        $(".mobile-nav-container, .menu").toggleClass("menu-top");
        if (document.getElementById("menu").checked) {
            document.getElementById("menu").checked = false;
            //uncheck checkboxes so mobile menu resets each time
            $('.menu-checkbox').prop('checked', false);
        }
        else {
            document.getElementById("menu").checked = true;
        }
        $("#wtoverlay-sm").toggleClass("nav-open-mobile");
        $("#mobile-nav-wrapper").toggleClass("wrapper-open-mobile");
        $('#nav-icon').toggleClass('open');
    });

    //Hide nav if user clicks off the nav
    $("#wtoverlay-sm").click(function () {
        if ($(this).hasClass("nav-open-mobile")) {
            $(".header-menu-toggle").toggleClass("mobile-open");
            $(".nav-search").toggleClass("closed");
            $(".mobile-nav-container, .menu").toggleClass("menu-top");
            if (document.getElementById("menu").checked) {
                document.getElementById("menu").checked = false;
                //uncheck checkboxes so mobile menu resets each time
                $('.menu-checkbox').prop('checked', false);
            }
            else {
                document.getElementById("menu").checked = true;
            }
            $(this).toggleClass("nav-open-mobile");
            $("#mobile-nav-wrapper").toggleClass("wrapper-open-mobile");
            $('#nav-icon').toggleClass('open');
        }
    });

    //Ensure mobile mega nav is always fixed when open
    $(".header-menu-toggle").click(function () {
        if ($(this).hasClass('mobile-open')) {
            $('.header').addClass("scrollDown").removeClass('scrollUp');
        } else {
            if ($('.header').offset().top === 0) {
                $('.header').removeClass('scrollDown').removeClass('scrollUp');
            }
        }
    });

    //Ensure large mega nav is always fixed when open
    //$(".wtnav__dropdown__link").click(function () {
    //    if ($(this).hasClass('wtnav__dropdown__link--active')) {
    //        $('#meganav').addClass("scrollDown").removeClass('scrollUp');
    //    } else {
    //        if ($('#meganav').offset().top === 125) {
    //            $('#meganav').removeClass('scrollDown').removeClass('scrollUp');
    //        }
    //    }
    //});

    //Allowing to tab to the mobile nav for accessibility
    //When an item with a child is clicked, set the items of that original view to have a tabindex of -1. This is to prevent being able to tab backwards from the next view, as this current will be be hidden and therefore not tabbable. 

    $("button.next-level").on("click", function () {

        var buttonAttr = $(this).attr("for");
        var checkboxId = '#' + buttonAttr;

        //Scroll fix starts here
        var previousMenu = $(this).closest(".menu");
        var newMenu = $(this).siblings(".menu");
        newMenu.addClass("menu-scroll");
        previousMenu.removeClass('menu-scroll');
        //Scroll fix ends here

        $(this).parent().find('#' + buttonAttr).prop('checked', true);

        $(this).closest('.menu').children().each(function () {
            $(this).attr("tabindex", "-1");

            $(this).children().each(function () {
                $(this).attr("tabindex", "-1");

                $(this).children().each(function () {
                    $(this).attr("tabindex", "-1");
                });
            });
        });
    });


    //when a back button is clicked, remove the tabindex attribute for the view that your are navigating to, so the correct items are tabbable.
    $("button.back-btn").on("click", function () {

        var buttonAttr = $(this).attr("for");

        //Scroll fix starts here
        var currentMenu = $(this).closest('.menu').parent().closest('.menu');
        currentMenu.addClass('menu-scroll');
        //Scroll fix ends here

        $(this).closest(".multi-level").find('#' + buttonAttr).prop('checked', false);

        $(this).closest('.menu').parent().closest('.menu').children().each(function () {
            $(this).removeAttr("tabindex");

            $(this).children().each(function () {
                $(this).removeAttr("tabindex");

                $(this).children().each(function () {
                    $(this).removeAttr("tabindex");
                });
            });
        });
    });
});
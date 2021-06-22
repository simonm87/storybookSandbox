$(document).ready(function () {
    if ($('.card-deck').length) {

        var nextButtons = [];

        //Loop though each div which is a card deck
        $('.card-deck').each(function (index) {

            var previousSlide;

            var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" role="button" aria-disabled="false" style="display: inline-block;"><img src="/images/left-arrow.svg" class="deck-arrow-icon" alt=""></button>';

            nextButtons[index] = { clicked: false, html: '<button id="' + index + '" type="button" data-role="none" class="slick-arrow slick-next-more" aria-label="More" role="button" style="" aria-disabled="false"><span class="slick-next-more__label">more</span><img src="/images/right-arrow.svg" class="deck-arrow-icon" alt=""></button>' };

            var cardsToDisplay = 0;
            var totalCards = $(this).children('article').length;

            if (totalCards > 2) {
                cardsToDisplay = 3;
            }
            else if (totalCards === 2) {
                cardsToDisplay = 2;

            }

            if (totalCards > 1) {
                $($(this)).slick({
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: cardsToDisplay,
                    slidesToScroll: 1,
                    prevArrow: prevButton,
                    nextArrow: nextButtons[index].html,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: cardsToDisplay,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                $('article').each(function (index) {
                    $(this).attr("tabindex", "-1");
                });

                $(this).find("[aria-label='Next']").addClass('slick-next--animate');

                $($(this)).on('breakpoint', function (event, slick, breakpoint) {

                    var button = $(this).find("[aria-label='Next']");
                    var btnId = button.attr("id");

                    if (nextButtons[index].clicked === true) {
                        $(button).removeClass('slick-next-more');
                        $(button).addClass('slick-next');
                        $(button).children('.slick-next-more__label').remove();

                    } else {
                        $(button).addClass('slick-next--animate');

                    }

                    setTimeout(function () {
                        $('article').each(function (index) {
                            $(this).attr("tabindex", "-1");
                        });
                    }, 300);
                });

                //Store previous slide in memory
                $($(this)).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    previousSlide = currentSlide;
                });

                $($(this)).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    if (currentSlide != previousSlide) {
                        var newSlide = currentSlide;
                        var slidesVisible = $('.slick-active', this).length;

                        if ($('.slick-arrow.slick-next').is(':focus')) {

                            if (slidesVisible == 3) {
                                newSlide = currentSlide + 2;
                            }
                            else if (slidesVisible == 2) {
                                newSlide = currentSlide + 1;
                            }
                        }

                        //set focus state of newly-revealed slide
                        $(this).children().find('[data-slick-index=' + newSlide + ']').find('a.excerpt-link').focus();
                        //update the tab indexes to override slick
                        setTimeout(function () {
                            $('article').each(function (index) {
                                $(this).attr("tabindex", "-1");
                            });
                        }, 300);
                    }
                });
            }
        });

        $(document).on('click', '.slick-next-more', function () {
            //Remove label elements and classes            
            $(this).removeClass('slick-next-more');
            $(this).addClass('slick-next');
            $(this).children('.slick-next-more__label').remove();

            //Update slick settings
            var btnIndex = $(this).attr('id');
            nextButtons[btnIndex] = { clicked: true, html: '<button id="' + btnIndex + '" type="button" data-role="none" class="slick-arrow slick-next" aria-label="Next" role="button" style="" aria-disabled="false"><img src="/images/right-arrow.svg" class="deck-arrow-icon" alt=""></button>' };

            //Slide values are reset every time the next/back button is pressed, so re-apply our tabindex change after a small delay
            setTimeout(function () {
                $('article').each(function (index) {
                    $(this).attr("tabindex", "-1");
                });
            }, 300);

            //calculateSliderHeight();
        });




    }

});
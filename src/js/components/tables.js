$(document).ready(function () { 

    if ($('.slick-table').length) {

        $('.slick-table').each(function (index) {

            var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" role="button" aria-disabled="false" style="display: inline-block;"><img src="/images/left-arrow.svg" class="deck-arrow-icon" alt=""><span class="slick-prev__label-table">previous row</span></button>';

            var nextButton = '<button type="button" data-role="none" class="slick-arrow slick-next-more" aria-label="More" role="button" style="" aria-disabled="false"><span class="slick-next-more__label-table">next row</span><img src="/images/right-arrow.svg" class="deck-arrow-icon" alt=""></button>';

            $($(this)).slick({
                dots: false,
                infinite: false,
                prevArrow: prevButton,
                nextArrow: nextButton
            });

        });

    }

});
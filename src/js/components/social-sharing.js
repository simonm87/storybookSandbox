$(document).ready(function () {

    //hiding share buttons
    if ($('.shareButtonHidden').val() == "show") {

        setTimeout(function () {
            $('.atss').addClass('show-social-buttons');
        }, 2000);

        setTimeout(function () {
            $('.atss a').each(function () {
                $(this).attr('tabindex', '0');
            });
        }, 2000);
    }

    //------------------------------------------
    //  SOCIAL SHARING - ADDTHIS
    //------------------------------------------

    addthis.shareButton({
        'button_selector': '.addthis_share_button',

    });

});
$(document).ready(function () {

    //------------------------------------------
    //                  VOLUNTEER LISTING
    //------------------------------------------

    if ($('.volunteering__select').length) {
        $('.volunteering__select').on('change', function (e) {
            var url = window.location.href;
            if ($(this).val() !== "") {
                if (url.indexOf("?") > 0) {
                    url = url.substring(0, url.indexOf("?"));
                }
                url += "?region=" + $(this).val();
            } else {
                url = window.location.pathname;
            }
            window.location.replace(url);
        });
    }

});
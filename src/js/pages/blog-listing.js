$(document).ready(function () {

    //------------------------------------------
    //  BLOG LISTING
    //------------------------------------------

    if ($('.blog__listing__select select').length) {
        $('.blog__listing__select select').on('change', function () {
            window.location.href = this.value;
        });
    }

});
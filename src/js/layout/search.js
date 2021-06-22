$(document).ready(function () {

    //------------------------------------------
    //  SEARCH LISTING
    //------------------------------------------

    if ($('#search-results').length) {
        if ($('#PlaceholderText').val() && $('#SearchQuery').val()) {
            $('#search-results').html($('#PlaceholderText').val()).show();
            $('#search-results-header').html('Search results');
        }
    }
    if ($('#page-search-input').length) {
        if ($('#SearchQuery').val())
            $('#page-search-input').val($('#SearchQuery').val());
    }

});
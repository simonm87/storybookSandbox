$(document).ready(function () {

    //Set the map height to the viewport height minus content above
    if ($('#map-view').length) {

        var mapDiv = "#map";
        var intViewportWidth = window.innerWidth;
        var contentAbove = $(".header").outerHeight() + $(".find-wood__search-container").outerHeight();
        var spaceRemaining = window.innerHeight - contentAbove;

        if (intViewportWidth < 576) {

            if (spaceRemaining < 480) {
                $(mapDiv).height(480);
            } else {
                $(mapDiv).height(spaceRemaining);
            }
        } else {
            if (spaceRemaining < 600) {
                $(mapDiv).height(600);
            } else {
                $(mapDiv).height(spaceRemaining);
            }
        }
    }
});
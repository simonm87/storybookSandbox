$(document).ready(function () {
    //remove all styles from p tags surrounding f2 or f3 classes
    //used to ensure correct styles of f2 and f3 in standard rte
    $(".f2").parent("p").css("font-size", "unset");
    $(".f3").parent("p").css("font-size", "unset");
});
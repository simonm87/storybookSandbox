$(document).ready(function () {

    // search modal
    $('#searchModal').on('shown.bs.modal',
        function () {
            $(this).find('#modal-search-input').focus();
        });
    // tab order fix
    $('#searchModal').keydown(function (e) {
        if ($('#modal-search-btn').is(":focus") && (e.which || e.keyCode) === 9) {
            e.preventDefault();
            $('.searchModal-btn__close').focus();
        }
    });

});
jQuery(document).ready(function ($) {
    //abrir popup
    $('.popup-iniciador').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });
    //cerrar popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('.fa-circle-xmark') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //para cerrar popup con esc
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });
});
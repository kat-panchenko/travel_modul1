jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href");
        destination = jQuery(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1300);
        return false;
    });

var h_hght = $(window).height() - 80;
var h_mrg = 0;

$(function () {

    var elem = $('#blue_bar');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', h_mrg);
    }

    $(window).scroll(function () {
        top = $(this).scrollTop();

        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });

});

$('.show-modal').click(function () {
    $('.modal-overlay').addClass('active');
    var top = $(document).scrollTop();
    $('.modal-overlay').css('top', top);
    $('body').addClass('no-scroll');
});

$('[data-close]').click(':not(.modal-body)', function () {
    $('.modal-overlay').removeClass('active');
    $('body').removeClass('no-scroll');
});
});
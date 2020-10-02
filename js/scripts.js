$(document).ready(function() {
    $('.bars').on('click', function() {
        //$('.myheader ul li').toggleClass('showing');
        $('.log-class').toggleClass('showing');
        $('.myheader ul').toggleClass('showing');
        $('.text-box').toggleClass('non');
    });
});
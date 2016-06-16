// Write your Javascript code.

$(document).ready(function () {

    $(window).scroll(function () {
        updateNavigationFixedWhenDesktop();
    });

    $(window).resize(function () {
        updateNavigationFixedWhenDesktop();
    });

    function updateNavigationFixedWhenDesktop() {
        if ($(window).width() > 820) {
            updateNavigationFixed();
        }
    }

    function updateNavigationFixed() {
        var headerHeight = $("header .headerBackground").outerHeight();

        if ($(window).scrollTop() > headerHeight && !$("header nav").hasClass("fixed")) {
            $("header nav").addClass("fixed");
        }
        else if ($(window).scrollTop() <= headerHeight && $("header nav").hasClass("fixed")) {
            $("header nav").removeClass("fixed");
        }
    }

});

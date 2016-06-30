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

        if ($(window).scrollTop() > headerHeight && !$("body > header").hasClass("fixed")) {
            $("body > header").addClass("fixed");
        }
        else if ($(window).scrollTop() <= headerHeight && $("body > header").hasClass("fixed")) {
            $("body > header").removeClass("fixed");
        }
    }

});

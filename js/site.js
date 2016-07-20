// Write your Javascript code.

var mobileBreakpoint = 923;

$(document).ready(function () {

    $(window).scroll(function () {
        updateNavigationFixedWhenDesktop();
    });

    $(window).resize(function () {
        updateNavigationFixedWhenDesktop();
        if ($(window).width() <= mobileBreakpoint) {
            $("body > header").removeClass("fixed");
        }
    });

    updateNavigationFixedWhenDesktop();

    function updateNavigationFixedWhenDesktop() {
        if ($(window).width() > mobileBreakpoint) {
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

// Init Animate on Scroll
AOS.init({
    duration: 1000,
})

$(function(){
    // Handle Show Nav
    $(".menu-button").on("click", function () {
        $(".nav-container").toggleClass("show-nav-container");
        $(".nav-list").toggleClass("show-nav-list");
    });

});
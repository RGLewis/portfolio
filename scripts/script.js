// Init Animate on Scroll
AOS.init({
    duration: 1000,
})

$(function(){
    // Handle Show Nav
    $(".menu-button").on("click", function () {
        // $(".nav-container").toggleClass("show-nav-container");
        // $(".nav-button-container").toggleClass("show-nav-button-container");
        $(".nav-list").toggleClass("show-nav-list");
    });

});
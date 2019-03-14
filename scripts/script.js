// Init Animate on Scroll
AOS.init({
    duration: 1000,
})

// Anime Js
// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
// });

$(function(){
    // Handle Show Nav
    $(".menu-button").on("click", function () {
        // $(".nav-container").toggleClass("show-nav-container");
        // $(".nav-button-container").toggleClass("show-nav-button-container");
        $(".nav-list").toggleClass("show-nav-list");
    });

});
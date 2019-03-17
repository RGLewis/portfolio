// Init Animate on Scroll
AOS.init({
    duration: 1000,
})

$(function(){
    // Smooth scroll
    $('a').smoothScroll({
        speed: 500
    })

    // Handle Show Nav
    $(".menu-button").on("click", function () {
        $(".nav-container").toggleClass("show-nav-container");
        $(".nav-list").toggleClass("show-nav-list");
        $(".bar2").toggleClass("hide-bar2");
        $(".menu-bar").toggleClass("open");
    });

    // Carousel - adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp
    // Slide index starts at 1.
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls -- Increase slideIndex by one each time the forwards button is clicked
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    $(".back-button").click(function () {
        plusSlides(-1);
    });
    
    $(".forwards-button").click(function () {
        plusSlides(1);
    });
    
    // Get the slide and display: flex, display: none all other slides.
    function showSlides(n) {
        // Setting out the integer variables
        let i;

        // Setting out the slides variable
        let slides = document.getElementsByClassName("display-flex-container");
    
        // If variable 'n' is less than the length of slides, slide index will start at 1.
        if (n > slides.length) { slideIndex = 1 }
        
        // If variable 'n' is greater than 1, slide index will be the length of the slide
        if (n < 1) { slideIndex = slides.length }
    
        // Start at 0. If i = less than the length of slides, add 1 to i.
        for (i = 0; i < slides.length; i++) {
            // display none for all slides
            slides[i].style.display = "none";
        }

        // Display flex the slide that is 1 less than the slide index.
        slides[slideIndex - 1].style.display = "flex";
    } 
});

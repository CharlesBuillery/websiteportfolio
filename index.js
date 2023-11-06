$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

// Smooth scroll when links are clicked
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target, 1000); // 1000 milliseconds (1 second) for smooth scroll duration
    });
});
            });
        } // End if
    });
});
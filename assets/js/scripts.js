var swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Automatically change slides every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: 'slide', // 'slide' effect for a smooth transition
    speed: 600, // Duration of the transition in milliseconds
});


// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Social Media Icons Hover Effect (Optional)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.opacity = '0.8';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.opacity = '1';
    });
});

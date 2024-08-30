// Function to adjust the height of the mobile Swiper container
function adjustMobileSwiperHeight() {
    const mobileSlides = document.querySelectorAll('.swiper-container-mobile .swiper-slide img');
    let minHeight = Infinity;

    mobileSlides.forEach((img) => {
        const imgHeight = img.naturalHeight || img.clientHeight;
        if (imgHeight < minHeight) {
            minHeight = imgHeight;
        }
    });

    document.querySelector('.swiper-container-mobile').style.height = `${minHeight}px`;
}

// Initialize Swiper for Web Slideshow
var swiperWeb = new Swiper('.swiper-container-web', {
    loop: true, // Enables continuous loop mode
    navigation: {
        nextEl: '.swiper-container-web .swiper-button-next',
        prevEl: '.swiper-container-web .swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Automatically change slides every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: 'slide', // 'slide' effect for a smooth transition
    speed: 600, // Duration of the transition in milliseconds
});

// Initialize Swiper for Mobile Slideshow and adjust height
var swiperMobile = new Swiper('.swiper-container-mobile', {
    loop: true, // Enables continuous loop mode
    navigation: {
        nextEl: '.swiper-container-mobile .swiper-button-next',
        prevEl: '.swiper-container-mobile .swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Automatically change slides every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: 'slide', // 'slide' effect for a smooth transition
    speed: 600, // Duration of the transition in milliseconds
    on: {
        imagesReady: function() {
            adjustMobileSwiperHeight();
        },
    },
});

// Re-adjust height on window resize (optional, for better responsiveness)
window.addEventListener('resize', adjustMobileSwiperHeight);

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

// Smooth scroll to the next section when the scroll-down button is clicked
document.querySelector('.scroll-down-button').addEventListener('click', function() {
    document.querySelector('#works').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1, // Element appears when 10% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

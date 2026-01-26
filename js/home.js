// home.js
document.addEventListener("DOMContentLoaded", () => {
    try {
        if (typeof Swiper === "undefined") {
            console.error("Swiper not loaded!");
            return;
        }

        const aboutSlider = document.querySelector(".aboutSwiper");
        if (!aboutSlider) {
            console.warn(".aboutSwiper not found — skipping init");
            return;
        }

        new Swiper(aboutSlider, {
            loop: true,
            spaceBetween: 40,
            speed: 900,
            autoplay: { delay: 4200, disableOnInteraction: false },
            effect: "fade",
            fadeEffect: { crossFade: true },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            grabCursor: true,
        });

        console.log("About Us slider initialized!");
    } catch (err) {
        console.error("Swiper init failed:", err);
    }
});
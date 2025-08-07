// Background Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/ba.jpg",
        "images/background2.jpeg",
        "images/background3.jpg",
    ];
    let currentIndex = 0;
    const banner = document.querySelector(".background-banner");

    function changeBackground() {
        banner.classList.remove("fade-in");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            banner.style.backgroundImage = `url(${images[currentIndex]})`;
            banner.classList.add("fade-in");
        }, 650); // Match transition duration
    }

    setInterval(changeBackground, 6000);
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    banner.classList.add("fade-in");
}
);

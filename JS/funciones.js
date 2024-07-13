document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const overlay = document.querySelector('.overlay');

    imageContainer.addEventListener('mouseenter', function () {
        overlay.style.opacity = '1';
    });

    imageContainer.addEventListener('mouseleave', function () {
        overlay.style.opacity = '0';
    });
});

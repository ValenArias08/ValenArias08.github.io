$(document).ready(function() {
    // Cargar el menú desde menu.html
    $('#menu-container').load('Pages/menu.html');
});


function loadPage(url) {
    const iframe = document.getElementById('content-frame');
    iframe.src = url;

    iframe.onload = function() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
}
/*
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
*/

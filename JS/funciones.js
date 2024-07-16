$(document).ready(function() {
    // Cargar el menú desde menu.html
    $('#menu-container').load('Pages/menu.html');
});

function loadPage(url) {
    const iframe = document.getElementById('content-frame');
    iframe.src = url;

    iframe.onload = function() {
        adjustIframeHeight(iframe);
    };
}

function adjustIframeHeight(iframe) {
    const newHeight = iframe.contentWindow.document.body.scrollHeight + 'px';
    iframe.style.height = newHeight;
}
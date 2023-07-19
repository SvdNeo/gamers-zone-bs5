// JavaScript code for the window events
window.addEventListener('load', function () {
    console.log('Page finished loading');
});

window.addEventListener('resize', function () {
    console.log('Window resized');
});

window.addEventListener('scroll', function () {
    console.log('Scrolling occurred');
});

window.addEventListener('unload', function () {
    console.log('Page unloaded');
});

window.addEventListener('orientationchange', function (event) {
    console.log('Device orientation changed', event);
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event triggered');
});

document.addEventListener('readystatechange', function () {
    console.log('Ready state changed:', document.readyState);
});
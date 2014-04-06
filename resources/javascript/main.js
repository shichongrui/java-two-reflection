(function (window, document, $, undefined) {
    var windowHeight = window.innerHeight;
    var slides = null;
    var buttons = null;

    function init() {
        slides = document.querySelectorAll(".slide");
        buttons = document.querySelectorAll(".nav-button");

        adjustSlideHeights();

        attachNavEvents();
    }

    function adjustSlideHeights() {
        var numElements = slides.length;
        for (var i = 0; i < numElements; i++) {
            slides[i].style.height = windowHeight + "px";
        }
    }

    function attachNavEvents() {
        var numButtons = buttons.length;
        for (var i = 0; i < numButtons; i++) {
            buttons[i].addEventListener('click',function (e) {
                $('html, body').animate({
                    scrollTop: this.parentElement.nextElementSibling.offsetTop
                },750);
            });
        }
    }

    init();

})(window, document, jQuery, undefined);
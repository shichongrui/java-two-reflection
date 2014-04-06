(function (window, document, $, undefined) {
    var windowHeight = window.innerHeight;
    var currentSlide = 1;
    var slides = null;
    var buttons = null;

    function init() {
        //scroll back up to the top
        window.scrollTo(0,0);
        
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
        attachButtonEvents();
        attachKeyEvents();
    }

    function attachButtonEvents() {
        var numButtons = buttons.length;
        for (var i = 0; i < numButtons; i++) {
            buttons[i].addEventListener('click', function (e) {
                if (this.parentElement.nextElementSibling) {
                    scrollToElement(this.parentElement.nextElementSibling);
                    currentSlide++;
                }
            });
        }
    }

    function attachKeyEvents() {
        document.addEventListener('keydown', function (e) {
            var key = e.keyCode ? e.keyCode : e.charCode;

            if (key == 40) {
                scrollToElement(document.getElementById('slide' + ++currentSlide));
            } else if (key == 38) {
                scrollToElement(document.getElementById('slide' + --currentSlide));
            }
        })
    }

    function scrollToElement(element) {
        $('html, body').animate({
            scrollTop: element.offsetTop
        }, 750);
    }

    init();

})(window, document, jQuery, undefined);
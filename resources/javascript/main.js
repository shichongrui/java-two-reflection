NodeList.prototype.toArray = function() {
    var numNodes = this.length;
    var array = [];
    for (var i = 0; i < numNodes; i++) {
        array.push(this[i]);
    }
    return array;
};

(function (window, document, $, undefined) {
    var windowHeight = window.innerHeight;
    
    function init() {
        prepCarousel();
    }
    
    function prepCarousel() {
        document.getElementById("carousel").style.height = windowHeight + "px";
        document.querySelector(".carousel-inner").style.height = windowHeight + "px";
        $('.carousel').carousel({
            interval: false
        });
        
        $('#carousel').on('slid', function() {
            $('#carousel').carousel('pause');
        });
    }

    init();

})(window, document, jQuery, undefined);
var leftRight = function() {
    var scrolling = false
    var intervalId = 0
    var speed = 10
    var Scroller = null;
    this.scroll = function(d) {
        scrolling = true;
        var a = Scroller.scrollLeft,
            right = false,
            left = false;
        if(d>a) {
            a += Math.ceil((d-a) / speed);
            right = true;
        }
        else {
            a = a + (d-a) / speed;
            left = true;
        }
        Scroller.scrollLeft = a;
        if(a == d || (right && Scroller.scrollLeft >= d) || (left && Scroller.scrollLeft <= d)) {
            scrolling = false;
            clearInterval(intervalId);
        }
    }
    this.isScrolling = function() {
        return scrolling
    }
    this.setScroller = function(el) {
        Scroller = el;
    }
    this.setIntervalId = function(id) {
        intervalId = id
    }
}
window.leftRight = new leftRight();
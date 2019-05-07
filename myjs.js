$(document).ready(responsive);
$(window).resize(responsive);

// Responsive design
function responsive() {
    var obj = $("body").width();
    if (obj < 1230) {
        $('.sidebarIconToggle').css("display", "unset");
        $('#buttons').css("display", "none");
        $('#navbar').css("height", "66px");
        $('#main').css("margin-top", "66px");
        $('#logo').css("margin-top", "15px");
    }
    else {
        $('#navbar').css("height", "80px");
        $('#main').css("margin-top", "80px");
        $('#buttons').css("display", "unset");
        $('.sidebarIconToggle').css("display", "none");
        $('#logo').css("margin-top", "20px");
    }
    if (obj < 1017) {
        $('.info').css("width", "100%");
        $('#bio img, #skills img, #experience img').css("float", "unset");
        $('#bio img, #skills img, #experience img').css("margin", "50px auto");
        $('#examples div').css("width", "80%");
        $('#examples div').css("float", "none");
        $('#examples div').css("margin", "10px auto");
        $('.info-left').css("width", "100%");
        $('.info-left').css("float", "none");
        $('#me img').css("float", "none");
        $('#me img').css("margin", "50px auto");
        $('#me').css("padding", "1px 0");
        $('#bio').css("padding-bottom", "1px");
    }
    else {
        $('.info').css("width", "70%");
        $('#bio img, #skills img, #experience img').css("float", "left");
        $('#bio img, #skills img, #experience img').css("margin", "50px");
        $('#examples div').css("width", "40%");
        $('#examples div').css("float", "left");
        $('#examples div').css("margin", "10px 5%");
        $('#me').css("padding", "100px 0");
        $('.info-left').css("width", "70%");
        $('.info-left').css("float", "right");
        $('#me img').css("float", "right");
        $('#me img').css("margin", "50px");
        $('#experience .left-block p').css("font-size", "22px");
    }
    if (obj < 520){
        $('.fa').css("width", "42px");
        $('.fa').css("height", "42px");
        $('.fa').css("padding", "0");
        $('.fa').css("padding-top", "5px");
        $('#links').css("width", "300");
    }
    else{
        $('.fa').css("width", "80px");
        $('.fa').css("height", "80px");
        $('.fa').css("padding", "25px");
        $('#links').css("width", "510");
    }

    if (obj < 470) {
        $('#logo a').text("Akmal");
        $('.info-left p').css("font-size", "20px");
        $('.highlight').css("font-size", "25px");
    }
    else {
        $('#logo a').text("Akmal Djumakhodjaev");
        $('.info-left p').css("font-size", "30px");
        $('#experience .left-block p').css("font-size", "22px");
        $('.highlight').css("font-size", "40px");
    }
}

// Positions carousel
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 12) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

// Back to Top Button
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});
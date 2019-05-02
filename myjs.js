$(document).ready(responsive);
$( window ).resize(responsive);

function responsive(){
  var obj = $("body").width();
  if(obj < 1017){
    $('#info').css("width", "100%");
    $('#bio img').css("float", "none");
    $('#bio img').css("margin", "50px auto");
    $('#examples div').css("width","80%");
    $('#examples div').css("float","none");
    $('#examples div').css("margin","10px auto");
    $('#buttons').css("width","40%");
    $('#buttons li').css("width","25%");
    $('#btn1').html("A");
    $('#btn2').html("P");
    $('#btn3').html("C");
     }
  else{
    $('#info').css("width", "70%");
    $('#bio img').css("float","left");
    $('#bio img').css("margin", "50px");
    $('#examples div').css("width","40%");
    $('#examples div').css("float","left");
    $('#examples div').css("margin","10px 5%");
    $('#buttons').css("width","500px");
    $('#buttons li').css("width","140px");
    $('#btn1').html("About me");
    $('#btn2').html("Portfolio");
    $('#btn3').html("Contacts");
  }
  
  if(obj<470){
    $('#logo a').text("Akmal");
  }
  else{
    $('#logo a').text("Akmal Djumakhodjaev");
  }
  
  if(obj<360){
    $('#links').css("width","170");
  }
  else{
    $('#links').css("width","340");
  }
}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 12) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
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
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
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

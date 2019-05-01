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
     }
  else{
    $('#info').css("width", "70%");
    $('#bio img').css("float","left");
    $('#bio img').css("margin", "50px");
    $('#examples div').css("width","40%");
    $('#examples div').css("float","left");
    $('#examples div').css("margin","10px 5%");
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

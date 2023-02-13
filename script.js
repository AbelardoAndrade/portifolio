//Menu mobile

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});


//compatibilidade scroll smooth para safari

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });
   });


   //Animacao para o texto

   var text = document.getElementById("text");
var str = text.innerHTML;
var split = str.split("");
text.innerHTML = "";

for (var i = 0; i < split.length; i++) {
  text.innerHTML += "<span>" + split[i] + "</span>";
}

var char = 0;
var repeatCount = 0;
var timer = setInterval(onTick, 200);

function onTick() {
  var span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === split.length) {
    char = 0;
    repeatCount++;
    if (repeatCount === 3) {
      clearInterval(timer);
      complete();
      return;
    }
  }
}

function complete() {
  text.innerHTML = str;
}

   
   



    
    
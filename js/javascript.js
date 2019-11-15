/* const intro = "Podaj imię:";
var rezultat;
var a = 1;
var b = 2;
var wynik;
wynik = (a > b) ? 'Zmienna a jest większa niż b.' : 'Zmienna a jest mniejsza niz b.';

function funkcja(Wiek, WiekSamochodu, WiekZony)
{
    var person = Wiek + WiekSamochodu + WiekZony;
    return person;

}
document.write(funkcja(25, 18, 30)); */ 

/*
function drawMap (x){
    const xArr = [];
    for(let i=0; i<=x; i++){
        xArr[i] = i;
        document.write(xArr[i]);
    }
}
drawMap (5);
*/

/*
var div = $( "div" );
 
function runIt() {
  div
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .slideToggle( 1000 )
    .slideToggle( "fast" )
    .animate({ left: "-=200" }, 1500 )
    .hide( "slow" )
    .show( 1200 )
    .slideUp( "normal", runIt );
}
 
function showIt() {
  var n = div.queue( "fx" );
  $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}
 
runIt();
showIt(); */

document.addEventListener("DOMContentLoaded", function () {



  let vbut;
vbut = document.getElementById("vbuttonid");
vbut.addEventListener('click', function(){
  window.scrollTo(0, 1450);
});


  //main auto slider for images
  $("#imgcon > div:gt(0)").hide();

  setInterval(function() {
  $('#imgcon > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#imgcon');
  },  4000);

  //down auto slider for quotes
  $("#footsec1 > img:gt(0)").hide();

  setInterval(function() {
  $('#footsec1 > img:first')
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#footsec1');
  },  4000);





//slider for news contener
    let slideIndex = 1;
      showSlides(slideIndex);
//arrow right onclick
      let nextright = document.getElementById("nextrightid");
      nextright.onclick = function nextSlide(n){
        showSlides(slideIndex += 1);
      }
//arrow left onclick
      let nextleft = document.getElementById("nextleftid");
      nextleft.onclick = function nextSlide(n){
        showSlides(slideIndex -= 1);
      }
//dots onclick
      let dots = document.getElementsByClassName("dot");
      dots[0].onclick = function currentSlide(n){
        showSlides(slideIndex = 1);
      }
      dots[1].onclick = function currentSlide(n){
        showSlides(slideIndex = 2);
      }
      dots[2].onclick = function currentSlide(n){
        showSlides(slideIndex = 3);
      }
      

  //function
    function showSlides(n) {
      let i;
      let dots = document.getElementsByClassName("dot");
      let slides = document.getElementsByClassName("Slides");

      
      if (n > slides.length) {slideIndex = 1}
      else if (n < 1) {slideIndex = slides.length}

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
    }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
    }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";

    } 
    
    



//show current date
function printDate(){
  var month = new Date().getMonth() + 1
  var day = new Date().getDate()
  var year = new Date().getFullYear()
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  return (month + "/" + day + "/" + year + " " + hour + ":" + minutes);
  }

  let arttime = document.getElementById("arttime");
  arttime.innerText = printDate();
  let arttime2 = document.getElementById("arttime2");
  arttime2.innerText = printDate();
  let arttime3 = document.getElementById("arttime3");
  arttime3.innerText = printDate();
    

/*
  let li = document.getElementsByTagName("li");

  li[0].onclick = function (){
    location.replace("/index.html");
  }
  
  li[2].onclick = function (){
    location.replace("/buy.html");
  }

  li[3].onclick = function (){
    window.location.replace("/contactus.html");
  }
*/
resizeimgcontener();
function resizeimgcontener(){
  let imgcon = document.getElementById("imgcon");
  let img = document.getElementsByClassName("imgs");

  imgs[0].setAttribute("height", "100%");
}
}); 

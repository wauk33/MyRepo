document.addEventListener("DOMContentLoaded", function () {




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

  //bottom auto slider for quotes
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
      
  //News scroller
  let vbut;
  let news1ypos = 700;
  let news2ypos = 1450; 
  let news3ypos = 2200;
  let news4ypos = 2900;

vbut = document.getElementById("vbuttonid");
vbut.addEventListener('click', function(){
  if (slideIndex === 3){window.scrollTo(0, news3ypos);}
  if (slideIndex === 2){window.scrollTo(0, news2ypos);}
  if (slideIndex === 1){window.scrollTo(0, news1ypos);}

});

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
function printDateToday(){
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  let year = new Date().getFullYear()
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  return (day + "/" + month + "/" + year + " " + hour + ":" + minutes);
  }

//show modified date (random)
  function printDate(x, z){
    let month = new Date().getMonth() - x
    let day = new Date().getDate() - x
    let year = new Date().getFullYear();
    let hour = new Date().getHours(); - z
    let minutes = new Date().getMinutes(); - z
    return (day + "/" + month + "/" + year + " " + hour + ":" + minutes);
    }

  let arttime = document.getElementById("arttime");
  arttime.innerText = printDateToday();
  let arttime2 = document.getElementById("arttime2");
  arttime2.innerText = printDate(1,2);
  let arttime3 = document.getElementById("arttime3");
  arttime3.innerText = printDate(2,2);
  let arttime4 = document.getElementById("arttime4");
  arttime4.innerText = printDate(3,2);
    

//back to top of the page button
let backToTopButton = document.getElementById("toTopBtn");
window.onscroll = function(){
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

toTopBtn.addEventListener('click', function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}); 

}); 

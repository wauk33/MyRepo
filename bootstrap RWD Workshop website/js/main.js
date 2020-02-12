document.addEventListener('DOMContentLoaded', function(){





const nav = document.querySelector("nav");
const navbutton = document.querySelector(".navbar-toggler")

function addNavShadowOnClick(){
        if ((nav.classList.contains("navbarshadow") === false) && (window.scrollY < 200 && window.scrollY > -1 )) {
            nav.classList.add("navbarshadow")
        } else if ((nav.classList.contains("navbarshadow") === true) && (window.scrollY < 200 && window.scrollY > -1 )) {
            nav.classList.remove("navbarshadow")
        }}

function addNavShadow(){
    if (window.scrollY > 200){
        nav.classList.add("navbarshadow")
    }
    else{
        nav.classList.remove("navbarshadow")
    }
}

navbutton.addEventListener('click', addNavShadowOnClick);
document.addEventListener('scroll', addNavShadow);

    $(document).click(function (event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $(document).scroll(function (event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    //back to top of the page button
const backToTopButton = document.getElementById("toTopBtn");
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

//disable arrow when scroll > 300px
const arrow = document.querySelector(".home-arrow");
window.onscroll = function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      arrow.style.visibility = "hidden";
    } else {
      arrow.style.visibility = "visible";
    }
}


})

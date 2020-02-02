document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector("nav");
const navbutton = document.querySelector(".navbar-toggler");

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
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $(document).scroll(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
    
// #about icons on mouse over animation
const highlight = document.querySelectorAll(".highlight");
const about = document.getElementById("about");
const icon = about.querySelectorAll("i");

for(let i=0; i<highlight.length; i++){
highlight[i].addEventListener('mouseout', function(){
    if (icon[i].classList.contains("ihover")){
icon[i].classList.remove("ihover");
}
    else{
highlight[i].addEventListener('mouseover', function(){
icon[i].classList.add("ihover");
})}})}

$('.team-slick').slick({
    autoplay: true,
    infinite: true,
    mobileFirst: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: 
[
{
    breakpoint: 1,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    }
},
{
    breakpoint: 400,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    }
},
{
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
},
{
    breakpoint: 992,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
},
{
    breakpoint: 1200,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
},
{
    breakpoint: 1600,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 1
    }
}
]
  });

})
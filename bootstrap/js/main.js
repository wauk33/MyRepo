document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector("nav");

function addNavShadow(){
    if (window.scrollY > 400){
        nav.classList.add("navbarshadow")
    }
    else{
        nav.classList.remove("navbarshadow")
    }
}

document.addEventListener('scroll', addNavShadow);

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

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
})
}
})
}
})
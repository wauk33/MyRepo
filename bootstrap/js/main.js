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
})
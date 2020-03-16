document.addEventListener('DOMContentLoaded', function(){

const brand = document.getElementById("nav-brand-id");
if (window.scrollY > 140){
    brand.classList.add("nav-brand-hide")
}
window.addEventListener("scroll", () => {
    if (window.scrollY > 140){
        brand.classList.add("nav-brand-hide")
    }
    else{
        brand.classList.remove("nav-brand-hide")
    }
})

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);    
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);        


});


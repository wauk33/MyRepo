document.addEventListener('DOMContentLoaded', function(){

    const brand = document.getElementById("nav-brand-id");
    const navbar = document.getElementById("navbar");
    
    $(document).click(function (event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-toggler").hasClass("collapsed");
        if (_opened === false && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
    
    $(document).scroll(function (event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-toggler").hasClass("collapsed");
        if (_opened === false && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
    
    if (window.scrollY > 140){
        brand.classList.add("nav-brand-hide")
        navbar.classList.add("nav-transparent")
    }
    window.addEventListener("scroll", () => {
        if (window.scrollY > 140){
            brand.classList.add("nav-brand-hide")
            navbar.classList.add("nav-transparent")
        }
        else{
            brand.classList.remove("nav-brand-hide")
            navbar.classList.add("nav-transparent")
        }
    })
    
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);    
    var scene2 = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene);        
    
    
    });
    
    
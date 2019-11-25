const cont = document.getElementById("container");
const img1 = document.querySelector(".item1");
const img2 = document.querySelector(".item2");
const arrow = document.querySelector(".arrow");

arrow.addEventListener('click', function(){
    img1.classList.toggle('hide')
    
    if(img1.classList.contains('hide')){
        arrow.style.transform = "rotate(0deg)"
    }else
    arrow.style.transform = "rotate(-180deg)"
});

cont.addEventListener('click', function(){

    if(img1.classList.contains('hide')){
    img1.classList.toggle('hide')
    arrow.style.transform = "rotate(180deg)"
    }

})
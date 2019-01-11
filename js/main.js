// burger - click on : toggle active on .burger - .menu - (circle??? = lights)
let burger=$(".burger");
let menu=$("nav");

let glass=$("img.light");
let title=$(".title");
let arrow=$(".arrow");

burger.click(function(){
    $(glass).removeClass("active");
    $(title).removeClass("active");
    $(burger).removeClass("yellow");
    $(burger).toggleClass("active");
    $(menu).toggleClass("active");
    $(arrow).removeClass("active");
    
});

//Circle Lightning button: click on : toggle active on .title - img.light
let lightButton=$(".circle");
//let glass=$("img.light");
//let title=$(".title");

lightButton.click(function(){
    $(glass).toggleClass("active");
    $(title).toggleClass("active");
    $(burger).toggleClass("yellow");
    $(arrow).toggleClass("active");
});

//banner-fix fixed on scroll main : toggle active on .banner-fix and toggle hide on .burger

let mainTop=$("main").offset().top;
let banner=$(".banner-fix");

$(window).scroll(function(){
    if ($(window).scrollTop() > mainTop-50){
        banner.addClass("active");
    } else {
        banner.removeClass("active")
    }
})


//a remettre correctement PORTFOLIO

let lis= document.querySelectorAll(".nav>li");

lis.forEach((li) => {
    li.addEventListener("click", switchActiveLi);
    
});

// == égale à
//=== super égale à, inclusive les chiffre et lettre

function switchActiveLi(ev){
    let clickedLi = ev.currentTarget;
    let activeLi=document.querySelector(".nav>li.active")
    if (activeLi !== null){
        activeLi.classList.remove("active");
    }
    clickedLi.classList.add("active");

    let a = clickedLi.querySelector("a");
    let allProjects=document.querySelectorAll (".project");
   
    allProjects.forEach((project) => {
        if(project.dataset.type === a.dataset.type || a.dataset.type === '') {
            project.classList.remove("hidden");
        } else {
            project.classList.add("hidden");
        }
    });
}
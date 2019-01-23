// burger - click on : toggle active on .burger - .menu - //.arrow-onn, glass-off, title-off
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

//Circle Lightning button: click on : toggle active on .title - img.light - burger - arrow
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


//PORTFOLIO - workpage-----------------------------------


let lis= document.querySelectorAll(".nav>li");

lis.forEach((li) => {
    li.addEventListener("click", switchActiveLi);   
});

//Fonction when click on li : 
//1) active on click and off the rest
//2) compair data-set type of a and project and show (remove 'hidden') the clicked-one

function switchActiveLi(ev){
    let clickedLi = ev.currentTarget;
    let activeLi=document.querySelector(".nav>li.active");

    if (activeLi !== null){
        activeLi.classList.remove("active");
    }
    clickedLi.classList.add("active");

    let a = clickedLi.querySelector("a");
    let allProjects=document.querySelectorAll (".project");
    //let images=document.querySelectorAll ("image"); //BW: added images

    allProjects.forEach((project) => {
        if(project.dataset.type === a.dataset.type || a.dataset.type === '') {
            project.classList.remove("hidden");
	    let genre = a.dataset.type;
	    if (genre === "all") {
	        $('.image').show();
	    } else {
	        //BW: here we can get the style and use that to show it
		console.log("Genre: "+genre); //debug
		$('.image').hide();
		$('[data-style="'+genre+'"]').show();
	    }
	} else {
            project.classList.add("hidden");
        }
    });
}


//----working but not beautifull-------------

// let pictures= document.querySelectorAll(".pictures img");

// pictures.forEach((picture) => {
//     picture.addEventListener("click", switchActivePic);   
// });

// function switchActivePic(ev){
//     let clickedPic = ev.currentTarget;
//     let activePic=document.querySelector(".pictures img.active");

//     if (activePic !== null){
//         activePic.classList.remove("active");
//     }
//     clickedPic.classList.add("active");
// } 


//--------------------

//after each refresh reset page on top
// $(document).ready(function(){
//     $(this).scrollTop(0);
//     });

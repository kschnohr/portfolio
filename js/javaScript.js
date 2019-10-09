
/*background on/off på menu*/
var menu = document.querySelector(".menu");


window.addEventListener("scroll", function(){
    menu.classList.add("active");
    backgroundOff();
    activeState();

});

function backgroundOff (){
    console.log(window.pageYOffset);
    if (window.pageYOffset <= 390) {
        menu.classList.remove("active");
        }
}

/*active state on menu*/

function activeState (){
var home = document.querySelector("#home");
var logo = document.querySelector(".logo");
var logoPosition = logo.pageYOffset;
var currentPosition = window.pageYOffset;
console.log(window.pageYOffset)
    if (currentPosition === logoPosition){
        home.classList.add("menu_underline");
    }

}

/*dropdown menu til tablet og tlf*/

var burger = document.querySelector(".burger_img");
var menu = document.querySelector(".menu");

burger.addEventListener("click", function(){
    console.log("da burger is clicked");
    menu.classList.toggle("dropdown_active");
});


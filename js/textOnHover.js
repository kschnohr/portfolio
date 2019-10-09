/*Text on hover */
var sanni = document.querySelector("#sanni_a");
var danfoss = document.querySelector("#danfoss_a");
var easv = document.querySelector("#easv_a")
var viewMoreSanni = document.querySelector(".view_more_sanni");
var viewMoreDanfoss = document.querySelector(".view_more_danfoss");
var viewMoreEasv  = document.querySelector(".view_more_easv");

sanni.addEventListener('mouseover', function(){
    viewMoreSanni.classList.add("show_text");
})

sanni.addEventListener('mouseout', function(){
    viewMoreSanni.classList.remove("show_text");
})


danfoss.addEventListener('mouseover', function(){
    viewMoreDanfoss.classList.add("show_text");
})

danfoss.addEventListener('mouseout', function(){
    viewMoreDanfoss.classList.remove("show_text");
})

easv.addEventListener('mouseover', function(){
    viewMoreEasv.classList.add("show_text");
})

easv.addEventListener('mouseout', function(){
    viewMoreEasv.classList.remove("show_text");
})


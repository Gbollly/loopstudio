"use strict";

document.querySelector(".menu-hamburger").addEventListener("click", function () {
    document.querySelector(".nav-mobile").classList.remove("hiddennav");
});

document.querySelector(".closeMenu").addEventListener("click", function(){
    document.querySelector(".nav-mobile").classList.add("hiddennav");
});

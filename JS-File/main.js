"use strict";

const display = document.querySelectorAll("div"),
      firstScreen = document.querySelector("#firstScreen"),
      lockScreen = document.querySelector("#lockScreen"),
      btnNum = document.querySelectorAll(".number ul"),
      lockTitle = document.querySelector(".title h1");

let activeBtn = btnNum.forEach(item => {
    item.style.transform = "scale(.2)";
});

let activeTitle = lockTitle.style.transform = "scale(.2)";



display.forEach(screen => {
    screen.addEventListener("click", () => {
        if (screen.id == "firstScreen") {
            btnNum.forEach(allBtn => {
                gsap.to (allBtn, {
                    scale: 1,
                    duration: .4,
                });
            });
            gsap.to (lockTitle, {
                scale: 1,
                duration: .4,
            });
            lockScreen.style.display = "block";
        }
    });
});


const btn1 = document.querySelector(".carousel-control-prev");
const btn2 = document.querySelector(".carousel-control-next");


const img1 = document.querySelector(".page__1");
const img2 = document.querySelector(".page__2");
const img3 = document.querySelector(".page__3");

const photo1 = document.querySelector("imgOne");
const photo2 = document.querySelector("imgTwo");
const photo3 = document.querySelector("imgThree");


const sizeImg = document.querySelectorAll(".size");



sizeImg.forEach(img => {
    img.style.transform = "scale(0.8)";
})



btn1.addEventListener("click", () => {
    gsap.to (photo2, {
        scale: 1,
        duration: .8,
    });
});

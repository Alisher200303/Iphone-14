"use strict";

const display = document.querySelectorAll("div"),
      firstScreen = document.querySelector("#firstScreen"),
      lockScreen = document.querySelector("#lockScreen"),
      btnNum = document.querySelectorAll(".numbers ul"),
      btnScreen = document.querySelector("input"),
      lockTitle = document.querySelector(".title h1");
      
      let activeBtn = btnNum.forEach(item => {
          item.style.transform = "scale(.2)";
        });

// firstScreen.style.display = "none"

let activeTitle = lockTitle.style.transform = "scale(0)";
let screenHidden = btnScreen.style.transform = "scale(0)";



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
            gsap.to (btnScreen, {
                scale: 1,
                duration: .4,
            });
            lockScreen.style.display = "block";
        }
    });
});

const collScreen = document.querySelector("#call-section");

// collScreen.style.transform = "scale(0)";

const phoneCall = document.querySelector("#phoneCall");

const backBtn = document.querySelectorAll(".back-btn i")

phoneCall.addEventListener("click", () => {
    gsap.to(collScreen, {
        scale: 1,
        x: 0,
        y: 0,
        duration: .2,   
    });  
});


backBtn.forEach(back => {
    back.addEventListener("click", () => {
        gsap.to(collScreen, {
            scale: 0,
            x: -100,
            y: 220,
            duration: .2,
        });
    });
});

// backBtn.addEventListener("click", () => {



// });

const listApp = document.querySelectorAll("#listApp");
const menuScreen = document.querySelector(".menu-displays");


listApp.forEach(app => {
    app.addEventListener("click", () => {
        if (app.id == "listApp") {
            app.classList.add("file");
        }
    });
    menuScreen.addEventListener("scroll", () => {
        app.classList.remove("file")
    })
});


"use strict";

const input = document.querySelector("input");

const numbers = document.querySelectorAll("li");
const clearBtn = document.querySelector("#clear");


numbers.forEach(num => {
    num.addEventListener("click", () => {
        if (num.id == "clear") {
            let str = input.value.toString();
            input.value = str.substr(0, str.length - 1);
        } else if (input.accessKey == input.value) {
            let body = document.querySelector("body");
            body.style.background = "#fff";
        } else {
            input.value += num.id;
            clearBtn.style.color = "red";
        }
    });
});


clearBtn.addEventListener("mouseover", () => {
    clearBtn.style.color = "red";
});

clearBtn.addEventListener("mouseout", () => {
    clearBtn.style.color = "";
});
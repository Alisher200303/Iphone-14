"use strict";

const btnSort = document.querySelectorAll(".sort-btn p");

const allBtn = document.querySelector("#defoult"),
      sortBtn = document.querySelector("#sort");


btnSort.forEach(sort => {
    sort.addEventListener("click", () => {
        if (sort.id == "sort") {      
            sortBtn.classList.add("defoult");
            allBtn.classList.remove("defoult");

        } else if (sort.id == "defoult") {
            sortBtn.classList.remove("defoult");
            allBtn.classList.add("defoult");
        }
    });
});


// ////////////   Call Manage //////////// //



const allIcon = document.querySelectorAll(".same__thing");

const favorite = document.querySelector("#favorite"),
      recents = document.querySelector("#recents"),
      user = document.querySelector("#user"),
      keypad = document.querySelector("#keypad"),
      voicemail = document.querySelector("#voicemail");
 

const favoriteText = document.querySelector("#favorite-text"),
      recentsText = document.querySelector("#recents-text"),
      userText = document.querySelector("#user-text"),
      keypadText = document.querySelector("#keypad-text"),
      voicemailText = document.querySelector("#voicemail-text");

const favoriteSection = document.querySelector(".manage-section"),
      recentsSection = document.querySelector(".call-title"),
      userSection = document.querySelector(".contact-section");

const userInput = document.querySelector("#user-input");


userSection.addEventListener("scroll", () => {
    var sticky = window.PageTransitionEvent;
    console.log(sticky);
});



allIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id == "favorite")
        {
           recents.classList.remove("active");
           favorite.classList.add("active");
           user.classList.remove("active");
           keypad.classList.remove("active");
           voicemail.classList.remove("active");
           
            favoriteText.classList.add("active");
            recentsText.classList.remove("active");
            userText.classList.remove("active");
            keypadText.classList.remove("active");
            voicemailText.classList.remove("active");

            favoriteSection.style.display = "block";
            recentsSection.style.display = "none";
            userSection.style.display = "none";

        }
        else if (icon.id == "recents")
        {
            favorite.classList.remove("active");
            recents.classList.add("active");
            user.classList.remove("active");
            keypad.classList.remove("active");
            voicemail.classList.remove("active");
           
            favoriteText.classList.remove("active");
            recentsText.classList.add("active");
            userText.classList.remove("active");
            keypadText.classList.remove("active");
            voicemailText.classList.remove("active");

            recentsSection.style.display = "block";
            favoriteSection.style.display = "none";
            userSection.style.display = "none";

            
        }
        else if (icon.id == "user")
        {
            favorite.classList.remove("active");
            recents.classList.remove("active");
            user.classList.add("active");
            keypad.classList.remove("active");
            voicemail.classList.remove("active");
           
            favoriteText.classList.remove("active");
            recentsText.classList.remove("active");
            userText.classList.add("active");
            keypadText.classList.remove("active")
            voicemailText.classList.remove("active");

            recentsSection.style.display = "none";
            favoriteSection.style.display = "none";
            userSection.style.display = "block";
        }
        else if (icon.id == "keypad")
        {
            favorite.classList.remove("active");
            recents.classList.remove("active");
            user.classList.remove("active");
            keypad.classList.add("active");
            voicemail.classList.remove("active");
           
            favoriteText.classList.remove("active");
            recentsText.classList.remove("active");
            userText.classList.remove("active");
            keypadText.classList.add("active")
            voicemailText.classList.remove("active")
        }
        else if (icon.id == "voicemail")
        {
            favorite.classList.remove("active");
            recents.classList.remove("active");
            user.classList.remove("active");
            keypad.classList.remove("active");
            voicemail.classList.add("active");
           
            favoriteText.classList.remove("active");
            recentsText.classList.remove("active");
            userText.classList.remove("active");
            keypadText.classList.remove("active")
            voicemailText.classList.add("active")
        }
    });
});



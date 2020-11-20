"use strict";
let sections = [];

let menu = document.querySelector("header");
let menu_button = document.querySelector("#menu-button");

generateSections();
displaySection(0);

function generateSections() {
  let sct = document.querySelectorAll("section");
  let btn = document.querySelectorAll(".nav-button");

  for (let i = 0; i < sct.length; i++) {
    sections.push(new section(sct[i], btn[i], i));
  }
}

function displaySection(id) {
  sections.forEach((section) => {
    section.content.style.display = "none";

    section.button.classList.remove("selected");
    section.content.classList.remove("selected");
    menu.classList.remove("selected");
    void section.button.offsetWidth;
    void section.content.offsetWidth;

    if (section.id === id) {
      section.button.classList.add("selected");
      section.content.classList.add("selected");

      section.content.style.display = "flex";
    }
  });
}

function section(secEl, bttEl, id) {
  this.content = secEl;
  this.button = bttEl;
  this.id = id;
}
sections.forEach((section) => {
  section.button.addEventListener("click", () => {
    displaySection(section.id);
  });

  menu_button.addEventListener("click", () => {
    menu.classList.add("selected");
  });
});

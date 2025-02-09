"use strict";

console.log(document.body.clientWidth);

document.querySelector(".btn-menu").addEventListener("click", function () {
  document.querySelector(".overlay").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".dropdown-menu--forum").classList.add("hidden");
  document.querySelector(".dropdown-menu--marketplace").classList.add("hidden");
});

document
  .querySelector(".mobile-menu__exit")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.querySelector(".mobile-menu__link-arrow--forum").addEventListener("click", function () {
  document.querySelector(".dropdown-menu--forum").classList.toggle("hidden");
});

document.querySelector(".mobile-menu__link-arrow--marketplace").addEventListener("click", function () {
  document.querySelector(".dropdown-menu--marketplace").classList.toggle("hidden");
});



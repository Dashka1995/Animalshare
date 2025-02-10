"use strict";

console.log(document.body.clientWidth);

document.querySelector(".btn-menu").addEventListener("click", function () {
  document.querySelector(".overlay").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".dropdown-menu--mobile-forum").classList.add("hidden");
  document.querySelector(".dropdown-menu--mobile-marketplace").classList.add("hidden");
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

document.querySelector(".btn--whith-img--forum").addEventListener("click", function () {
  document.querySelector(".dropdown-menu--mobile-forum").classList.toggle("hidden");
});

document.querySelector(".btn--whith-img--marketplace").addEventListener("click", function () {
  document.querySelector(".dropdown-menu--mobile-marketplace").classList.toggle("hidden");
});

document.querySelector(".marketplace-sort__sorting-btn-open").addEventListener("click", function () {
  document.querySelector(".marketplace-sort__dropdown-menu").classList.toggle("hidden");
  document.querySelector(".marketplace-sort__sorting-btn-open-span").classList.toggle("hidden");
  document.querySelector(".marketplace-sort__sorting-btn-open").classList.toggle("marketplace-sort__sorting-btn-open--white");
});

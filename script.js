"use strict";

console.log(document.body.clientWidth);

// window.addEventListener('resize', function () {
//     if(document.body.clientWidth >= 834) {
//         this.document.querySelector('.hero__greeting').classList.replace('h4-workSans', 'h3-workSans');
//         this.document.querySelector('.hero__greeting').classList.replace('h1-workSans', 'h3-workSans');
//     } if(document.body.clientWidth < 834) {
//         this.document.querySelector('.hero__greeting').classList.replace('h3-workSans', 'h4-workSans');
//         this.document.querySelector('.hero__greeting').classList.replace('h1-workSans', 'h4-workSans');
//     } if(document.body.clientWidth >= 1280) {
//         this.document.querySelector('.hero__greeting').classList.replace('h3-workSans', 'h1-workSans');
//         this.document.querySelector('.hero__greeting').classList.replace('h4-workSans', 'h1-workSans');
//     }
// });

document.querySelector(".btn-menu").addEventListener("click", function () {
  document.querySelector(".overlay").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
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

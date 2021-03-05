"use strict";

var vert = document.querySelector('#vertical');
var horiz = document.querySelector('#horizontal');
var blur = document.querySelector('#blur');
var spread = document.querySelector('#spread');
var box = document.querySelector('.box');
var inpArr = [horiz, vert, blur, spread];
inpArr.forEach(function (el) {
  return el.addEventListener('input', function () {
    return box.style.boxShadow = "".concat(horiz.value, "px ").concat(vert.value, "px ").concat(blur.value, "px ").concat(spread.value, "px blue");
  });
});
console.log(Array.from(document.querySelectorAll('.sm-box .shadow')));

var updateElements = function updateElements() {
  Array.from(document.querySelectorAll('.sm-box .shadow')).forEach(function (el) {
    el.textContent === box.style.boxShadow; // if(idx === 1) el.textContent === `-moz-box-shadow: ${box.style.boxShadow}`
    // if(idx === 2) el.textContent === `-box-shadow: ${box.style.boxShadow}`
  });
}; // -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
// box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
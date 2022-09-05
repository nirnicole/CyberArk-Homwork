"use strict";
function doX() {
    const input = document.querySelector(".foo");
    const inputElem = input;
    console.log(inputElem.value);
}
function initPage() {
    const inputElem = document.querySelector(".foo");
    inputElem.addEventListener("input", (event) => {
        const target = event.target;
        console.log(target.value);
    });
}

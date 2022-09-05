function doX() {
    const input = document.querySelector(".foo")
    const inputElem = input as HTMLInputElement
    console.log(inputElem.value);
}

function initPage() {
    const inputElem = document.querySelector(".foo") as HTMLInputElement

    inputElem.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    })
}
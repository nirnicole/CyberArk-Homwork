//constants
const header = document.createElement("h1")
const subHeader = document.createElement("h2")
const box = document.getElementById("box")
const list = document.getElementById("list")
// const startItem = document.createElement("li")

//functions
const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const enterOnClick = function(){
    box.style.backgroundColor = "#8e44ad"
}

let counter=1
const createNewOnClick =  function(){
    counter+=1
    const newItem = document.createElement("li")
    newItem.innerHTML = ""+counter
    newItem.setAttribute("onclick" , "createNewOnClick()")
    list.appendChild(newItem)
}

//scripts
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

subHeader.innerHTML = "bla bla"
subHeader.setAttribute("class", "imAclass")
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)


// startItem.innerHTML = "first item"
// startItem.setAttribute("class", "item1")
// startItem.style.fontFamily = "Helvetica"
// document.body.appendChild(startItem)








/*
function add(){

    if(arguments.length==1){
        let x = arguments[0]
        return function(){
            return x + arguments[0]
        }
    }
    else if(arguments.length==2){
        return arguments[0]+arguments[1]
    }

}


console.log(add(2,7))
console.log(add(2)(7))


*/
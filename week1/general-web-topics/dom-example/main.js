//constants
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("ball")
const header = document.createElement("h1")
const subHeader = document.createElement("h2")
const box = document.getElementById("box")
const box1 = document.getElementById("box1")
const box2 = document.createElement("div") // dynamically creating an element
const someElement = document.createElement("some-id")

//functions
const moveRight = function(){
    let x = parseInt(ball.style.left) || 0            
    x+=15
    x+="px"              
    ball.style.left = x   
}

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

box1.onclick = function () {
    box1.innerHTML = "clicked"
}
box1.onmouseenter = function(){
    box1.innerHTML= "on mouse"
}

box2.setAttribute("class", "box")
box2.innerHTML = "im box 2"
someElement.onclick = function(){       // adding an event to the new element
    box2.innerHTML = "I'm alive!"
}


box2.innerHTML = "Im a new div"

someElement.innerHTML = "Im Some element"
document.body.appendChild(someElement)
someElement.setAttribute("id", "some-id")
document.getElementById("some-id").appendChild(box2) // now the box will be on the page, and will react to a click!



//scripts
playingField.style.backgroundColor = "blue";
console.log(down)
ball.style.backgroundColor = "yellow"

header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

subHeader.innerHTML = "bla bla"
subHeader.setAttribute("class", "imAclass")
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)










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
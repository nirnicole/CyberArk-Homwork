//constants
const container = document.getElementById("container")
const winLabel = document.createElement("h1")
document.getElementsByClassName

//functions

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function random_10(){
    const colors = ["red", "blue", "yellow", "green", "black", "brown", "purple", "orange", "pink", "grey"]

    return colors[ Math.floor(Math.random() * 10) >5 ? 1 : 0]
}

const randomColor = function(){
    this.style.backgroundColor= random_10();

    let winColor=container.childNodes[1].style.backgroundColor
    let currentColor
    for(let i=2; i<10; i++){
        currentColor=container.childNodes[i].style.backgroundColor
        if(currentColor!=winColor){
            return
        }
    }

    //win
    winLabel.innerText = "you win!"
    document.body.appendChild(winLabel)
}


for(let x=0; x<10; x++){
    const box = document.createElement("div")
    box.setAttribute("class", "box")
    box.onmouseenter = randomColor
    container.appendChild(box)
}


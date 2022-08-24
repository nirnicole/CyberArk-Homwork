//constants:
const playingField = document.getElementById("playing-field")
const ball = document.getElementById("ball")
const up = document.getElementById("up")
const left = document.getElementById("left")
const down = document.getElementById("down")
const right = document.getElementById("right")

//functions:
const borderCorrector = function () {
  //lef
  if (parseInt(ball.style.left) < 0) {
    ball.style.left = 0
  }
  if (parseInt(ball.style.top) < 0) {
    ball.style.top = 0
  }
  let dynamicRightBorder = playingField.clientWidth - ball.clientWidth
  if (dynamicRightBorder < parseInt(ball.style.left)) {
    ball.style.left = `${dynamicRightBorder}px`
  }

  const dynamicPlayngfieldBoder = parseInt(
    getComputedStyle(playingField).borderLeftWidth
  )
  let dynamicBottomBorder =
    playingField.clientHeight - ball.clientHeight - dynamicPlayngfieldBoder
  if (dynamicBottomBorder < parseInt(ball.style.top)) {
    ball.style.top = `${dynamicBottomBorder}px`
  }
}

const moveRight = function () {
  let x = parseInt(ball.style.left) || 0
  ball.style.left = `${x + 15}px`
  borderCorrector()
}
const moveLeft = function () {
  let x = parseInt(ball.style.left) || 0
  ball.style.left = `${x - 15}px`
  borderCorrector()
}
const moveDown = function () {
  let y = parseInt(ball.style.top) || 0
  ball.style.top = `${y + 15}px`
  borderCorrector()
}
const moveUp = function () {
  let y = parseInt(ball.style.top) || 0
  ball.style.top = `${y - 15}px`
  borderCorrector()
}

//events:
up.onclick = moveUp
down.onclick = moveDown
right.onclick = moveRight
left.onclick = moveLeft

//scripts:
window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        moveDown() // code for "down arrow" key press.
        break
      case "ArrowUp":
        moveUp() // code for "up arrow" key press.
        break
      case "ArrowLeft":
        moveLeft() // code for "left arrow" key press.
        break
      case "ArrowRight":
        moveRight() // code for "right arrow" key press.
        break
      default:
        return // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault()
  },
  true //capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE
)
// the last option dispatches the event to the listener first,
// then dispatches event to window

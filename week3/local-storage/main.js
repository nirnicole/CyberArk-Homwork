// // Functions
// localStorage.setItem("name", "Shoobert")

// // Object
// localStorage.name = "Shoobert"

// // Object
// localStorage["name"] = "Shoobert"

// console.log(localStorage.name)
// localStorage.removeItem("name")
// // localStorage.clear()
// console.log(localStorage)

// let userStorage = {
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//     sectionA: 92,
//     sectionB: 11,
//   },
//   cart: [
//     { id: 3112, count: 2 },
//     { id: 812, count: 16 },
//   ],
// }

// //JS - Setting (all of these are valid)
// localStorage.userStorage = JSON.stringify(userStorage)
// localStorage.setItem("userStorage", JSON.stringify(userStorage))
// localStorage["userStorage"] = JSON.stringify(userStorage)

// //In the browser:
// let data = JSON.parse(localStorage.userStorage)
// console.log(data.cart[data.cart.length - 1].count)

// let data1 = JSON.parse(localStorage.dataThatIsImportant || "[1,2,3,4,5]")

// data1.forEach((d) => console.log(d))

const input = $("#textfield")
const wisdom = []
localStorage.setItem("idCounter", 1)

const deletingText = function () {
  localStorage.removeItem("wisdom")
}

const createDiv = function (containerId, text) {
  return `<div class="textBox" ; id="${containerId}" ; style="display: inline-block;">
  ${text} 
  <div class="xbox" ; style="cursor: pointer;color: red;">&#10008; </div>
</div>`
}

//ex1:
const takingInput = function () {
  let inputVal = input.val()
  let currentId = JSON.parse(localStorage.idCounter || 0)
  let textDiv = createDiv(currentId, inputVal)
  $("#display-text").append(textDiv)
  wisdom.push({
    text: inputVal,
    id: `${currentId}`,
  })

  localStorage.setItem("idCounter", JSON.parse(localStorage.idCounter || 0) + 1)

  if (wisdom.length % 2 == 0) {
    localStorage.removeItem("wisdom")
    localStorage.setItem("wisdom", JSON.stringify(wisdom))
  }
}

let wisdomData = JSON.parse(localStorage.wisdom || "[]")

wisdomData.forEach((w) => {
  let textDiv = createDiv(w.id, w.text)
  $("#display-text").append(textDiv)
})

$("#display-text").on("click", ".xbox", function () {
  let id = $(this).parent().attr("id")
  let wisdomData = JSON.parse(localStorage.wisdom || "[]")
  localStorage.removeItem("wisdom")
  let stringData = JSON.stringify(wisdomData.filter((w) => w.id != id))
  localStorage.setItem("wisdom", stringData)
})

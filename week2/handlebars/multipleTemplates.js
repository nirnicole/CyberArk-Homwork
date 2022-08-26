const animals = {
  animalsData: [
    "Rabbit",
    "Giraffe",
    "Kangaroo",
    "Whale",
    "Seagull",
    "Caterpie",
  ],
}

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderFirst = function () {
  const source = $("#first-template").html()
  const template = Handlebars.compile(source)
  let newHTML = template({ text: "This gets rendered" })
  $("body").append(newHTML)
}

const renderSecond = function () {
  const source = $("#second-template").html()
  const template = Handlebars.compile(source)
  let newHTML = template({ moreText: "This also gets rendered" })
  $("#special").append(newHTML)
}

const renderThird = function () {
  const source = $("#third-template").html()
  const template = Handlebars.compile(source)
  let newHTML = template(animals)
  $("#thirdP").append(newHTML)
}

renderFirst()
renderSecond()
renderThird()

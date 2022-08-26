// const source = $("#store-template").html()
// const template = Handlebars.compile(source)

// const newHTML = template({ item: "bread", price: "15" })
// $(".items").append(newHTML)

const classData = {
  classmates: [
    {
      name: "That on gal",
      description: "Always has the ansswer",
      socialNetwork: true,
    },
    {
      name: "The weird dude",
      description: "Quick with a smile",
      socialNetwork: false,
    },
    { name: "Taylor", description: "Just Taylor", socialNetwork: true },
  ],
}

const source = $("#show-data").html()
const template = Handlebars.compile(source)

const newHtml = template(classData)
$(".items").append(newHtml)

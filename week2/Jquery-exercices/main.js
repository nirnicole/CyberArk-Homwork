// const elems = $(".box")

// console.log(elems)
// elems.hide()

// console.log($)

// const sayHi = function(){
//     console.log("Hi!")
//   }
  
//   const $ = sayHi
  
// //   $() //prints "Hi!"

//   $("h4")

//   $("h4").css("color", "red")
//   console.log($("h4"))

//   $("h1").css("color", "blue")
//   $(".red-div").css("background-color", "red")


//   $("ul li:first-child").css("color", "green")
//   $("ul li:last-child").css("color", "pink")

//   $("#brown-div").css("background-color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")

// $('#my-input').val("terabyte")

// const x = $("#dataDiv").data().barcode
// const y = $("#dataDiv").data().expirationdate
// console.log( x)
// console.log( y)
// console.log($("#dataDiv").data())
//   $(".red-div").css("background-color", "red")

// $(".changeColor").on('mouseenter ',  () => {$(".changeColor").css("background-color", "red")})
// $(".changeColor").on('mouseleave ',  () => {$(".changeColor").css("background-color", "blue")})

// $(".changeColor").hover(() => $(".changeColor").css("background-color", "blue"))


// $("button").on( "click", function() {
//     alert($("#my-input").val())
//   })
  
// $("button").click(function() {
//     alert($("#my-input").val())
//   })
  
// $("div").hover(function() {$(this).css("background-color", "blue")})


// $(".feedme").on("click", function(){
//     // let divCopy = `<div class=feedme> ${$(this).text()} </div>`
//     let divCopy = jQuery.clone(this)

//   $("body").append(divCopy)
// })

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]


// for(let name of names){
//   $("body").append(`<div>${name.first}-${name.last}</div>`)
// }


// $("div").hover(function() {$(this).remove()})


// $("button").on("click", function(){
//     let divCopy = `<div class=blog> blablablabla </div>`
//     $("#blogs").append(divCopy)
// })

//THE GOOD WAY
// $("#blogs").on('click',".blog", function(){
//   $(this).text("blargh") 
// })

// $(".blog").on('mouseenter', function(){
//   $(this).text("blargh") 
// })

// $(".blog").on('mouseleave', function(){
//   $(this).text("blabla") 
// })


//the BAD WAY!
// $("button").on("click", function(){
//   let divCopy = `<div class=blog> blablablabla </div>`
  
//   $(".blog").on('click', function(){
//     $(this).text("blargh") 
//   })

//   $("#blogs").append(divCopy)
// })
let route = `https://random-word-api.herokuapp.com/word`

// //Spot Check 1
// $.get(route).then(function (word) {
//   console.log(word)
// })

// //Spot Check 2
// $.get("/sentiment/Ploy").then(function (response) {
//   console.log(response)
// })

//ex1:
//Spot Check 1
// $.get(route).then(function (word) {
//   console.log(word)
// })

//ex2:
const printResults = function (word, bookObject, gifObject) {
  $("body").append(
    `
    <label for="head1">The word is:</label>
    <h1 id="head1">${word}</h1>

    <label for="head2">The Book chosen:</label>
    <h1 id="head2">${bookObject.items[0].volumeInfo.title}</h1>
    
    <label for="myframe">Giph chosen:</label>    <br /><br />
    <iframe src="${gifObject.data[0].embed_url}" id ="myframe" frameborder="0"></iframe>

    `
  )
}

let apiKey = `vrgH1ScUUh3IdhqR6P33dsShxmRDVdh4`

$.get(route).then(function (response) {
  let word = response[0]
  let bookPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  )
  let gifPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${apiKey}&limit=1`
  )

  Promise.all([bookPromise, gifPromise]).then(function (results) {
    printResults(word, results[0], results[1])
  })
})

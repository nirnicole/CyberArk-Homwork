// //we can use `title` instead of `isbn` - that's allowed according to this application's programming interface!
// $.get(
//   "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
//   function (result) {
//     console.log(result) //prints A lot of description Text

//     console.log(result.items[0].volumeInfo.description) //prints A lot of description Text
//   }
// )

// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: function (data) {
//     console.log(data)
//   },
//   error: function (xhr, text, error) {
//     console.log(text)
//   },
// })

// const fetch = function () {
//   $.ajax({
//     method: "GET",
//     url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//     success: function (data) {
//       console.log(data)
//     },
//     error: function (xhr, text, error) {
//       console.log(text)
//     },
//   })
// }

// let data = $.get("/someAPIurl", function (result) {
//   return result
// })
// console.log(data)

// //EX1:
// const fetchGoogleBook = function (bookId) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${bookId}`,
//     success: function (data) {
//       console.log(data)
//     },
//     error: function (xhr, text, error) {
//       console.log(text)
//     },
//   })
// }

// fetchGoogleBook(9782806269171)

// //EX2:
// const fetchGoogleBook2 = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//       console.log(data)
//     },
//     error: function (xhr, text, error) {
//       console.log(text)
//     },
//   })
// }

// fetchGoogleBook2("isbn", 9789814561778)

// //EX3:
// const fetchGoogleBook3 = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//       let isbn
//       let book = data.items[0]
//       isbn = book.volumeInfo.industryIdentifiers.map((id) => id.identifier)
//       console.log(`book details:\n
//       title: ${book.volumeInfo.title},\n
//       author: ${book.volumeInfo.authors},\n
//       isbn: ${isbn}\n`)
//     },
//     error: function (xhr, text, error) {
//       console.log(text)
//     },
//   })
// }

// fetchGoogleBook3("isbn", 9789814561778)

// //EX4:
// const apiGet = function (query, apiKey, limit) {
//     return $.get(
//       `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=${limit}`
//     ).done(function (data) {
//       console.log("success got data", data)
//       for (let image of data.data)
//         $("body").append(
//           `<iframe src="${image.embed_url}" frameborder="0"></iframe>`
//         )
//     })
//   }

//   apiGet("hercules", "vrgH1ScUUh3IdhqR6P33dsShxmRDVdh4", 10)

//EX5:
const apiGet = function (
  query,
  apiKey = "vrgH1ScUUh3IdhqR6P33dsShxmRDVdh4",
  limit = 5
) {
  query = $("#textfield").val()
  console.log("log" + query)
  return $.get(
    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=${limit}`
  ).done(function (data) {
    console.log("success got data", data)
    for (let image of data.data)
      $("body").append(
        `<iframe src="${image.embed_url}" frameborder="0"></iframe>`
      )
  })
}

apiGet("hercules", "vrgH1ScUUh3IdhqR6P33dsShxmRDVdh4", 10)

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {            //note that this is a ANONYMUS function we passed as a callback function to timeout as well.
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument


// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)

// const square = num => console.log(num*num)
// square(4) // should print 16

// const getFormalTitle = (str1, str2) => ""+str1+" "+str2
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// //exrecises:
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
// const pushPull = callback => callback()

//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

//   const getTime = callback => callback(new Date())
  
//   getTime(returnTime)



  
// const alert = data => this.alert(data)
// const logData = data => console.log(data)

//   const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };

//   displayData(alert, logData, "I like to party")

// const threeSum = (a,b,c) => console.log(a+b+c)
// threeSum(4,7,10)

// const capitalize = str =>   console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())


// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

// const commentOnWeather = deg => console.log(`it's ${determineWeather(deg)}`)

// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }


// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
    
// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
// const makeSound = sound => alert(sound)
    
// explode(shineLight, makeSound, "BOOM")

// const run = (fname) => {console.log("Run, " + fname + ", run!")}
// const yell = function(action){
//     let env = "Forest"
//     action(env)
// }
// run(yell)
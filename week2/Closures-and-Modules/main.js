// console.log("Hello, world!")

// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()

// //spot check 1:

// const family = function(){

//     const members = []

//     const birth = function(fname) {
//         members.push(fname)
//         console.log(members)
//     }

//     return birth
// }

// let giveBirth = family()
// giveBirth("nir")
// giveBirth("nitay")
// giveBirth("batel")

// //modules:
// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const MathModule = mathOperations()
// console.log(MathModule.sub(12,2))

// console.log(MathModule.mult(7,MathModule.div(36,6)))

// //user module
// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Nir')
// usersModule.addUser('nitay')

// usersModule.listUsers()

// const StringFormatter = function(){

//     const capitalizeFirst = str => console.log(str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()) 
//     const skewerCase = str => console.log(str.split(/[ ,]+/).join('-'))

//     return {
//         capitalizeFirst: capitalizeFirst,
//         skewerCase: skewerCase
//     }
// }

// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

// const Bank = function(){

//     let money = 500

//     const deposit = cash => money+=cash
//     const showBalance = ()=> console.log(money)



//     return {
//         deposit: deposit,
//         showBalance: showBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

const SongsManager = function(){

    const songs = {}

    const addSong = function(songName, url){
        //brake the url
        const parsedURL = url.split('=')[1]
        songs[songName] = parsedURL
    }

    const getSong = songName => console.log(`https://www.youtube.com/watch?v=${songs[songName]}`)

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax")     // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

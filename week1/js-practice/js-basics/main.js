console.log("Hello, world!")

//JS basics!

//ex9
let boughtTesla = true
let isUSCitizen = true
const yearOfTeslaPurchase = 2014
let currentYear = 2018


if(boughtTesla&&isUSCitizen){
    let years = currentYear-yearOfTeslaPurchase
    console.log(years)
    if(years>=4){
        console.log("do you want an upgrade?")
    }
}

let employees = []
let candidates = ["nir", "batel", "maya","elik"]

employees.push(...candidates)
//employees.push(candidates[0], candidates[1], candidates[2])

console.log(employees)

employees.push(true)
console.log(employees)

//ex13.1
let p1 ={
    name: "batel",
    age: "25",
    city: "hulon"
}

let p2 ={
    name: "nir",
    age: "29",
    city: "nir hen"
}

if(p1.age===p2.age){
    if(p1.city===p2.city){
        console.log("Jill wanted to date Robert")
    }else{
        console.log("Jill wanted to date Robert, but couldn't")
    }

}


//ex13.2
let book1 = {
    title:"LOTR",
    auothor: "tolkin"
}

let book2 = {
    title:"GOT",
     auothor: "RRMartin"
}

let liberary = {
    books: [ book1,  book2 ]
}


//ex13.3
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  let name = prompt('Please enter the name for your reservation');
  name = name.toLowerCase()
  if(reservations[name]===undefined){
    console.log("There is nothing under this name.")
    reservations[name] = {claimed: true}
    }else{
    if(reservations[name].claimed){
        console.log("reservation is claimed")

    }
    else{
        console.log("reservation is NOT claimed")
    }
}


console.log(reservations)

//ex13 extensions

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let res = ""
res+=kitchen.owner + " ";

let expiryRemain = kitchen.fridge.items[1].expiryDate - date;

if(expiryRemain<0){
    res+=kitchen.fridge.items[1].name + " expired ";
    expiryRemain*=(-1);
    res+=expiryRemain + " days ago."
}


if(kitchen.fridge.works){
    res+="\nWeird, considering her fridge works. "
    if(kitchen.hasOven){
       res+="Luckily, she has an oven to cook the raddish in.";
    }else{
        res+="Too bad she doesn't have an oven to cook the raddish in."
    }
}else{

    res+="\nProbably because her fridge doesn't work."

    if(kitchen.hasOven){
        res+="Luckily, she has an oven to cook the raddish in. And she’ll have to pay "
    }
    else{
        res+= "Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay "

    }
    res+= (kitchen.fridge.price/2) + " to fix the fridge."
}


console.log(res)



//
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }
for(let company of companies){
    console.log(company)
}


//ex15.1
const names = ["Ashley", "Donovan", "Lucas", "batel"]
const ages = [23, 47, 18]
const people = []

for(let index in names){
    let person={
        name:names[index],
        age: ages[index]
    } 
    people.push(person)
}
console.log(people)



const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]


  for(let index in posts){
    if(posts[index].text === "This is the worst. DON'T BUY!"){
        posts.splice(index,1);
    }
  }

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let result = ""
  let temp = ""
  for(let key of Object.keys(dictionary)){
    temp = "Words that begin with " + key + ":\n"
    for(let word of dictionary[key]){
        temp+= "\t" + word + "\n"
    }
    result+=temp
  }

  console.log(result)


  console.log(x)

  if(true) {
    var x=3
  }

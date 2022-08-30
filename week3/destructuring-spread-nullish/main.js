let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

meatArr.push(vegetableArr[0])
vegetableArr = [...vegetableArr.slice(1)]

console.log(meatArr)
console.log(vegetableArr)

let firstPiece = { id: 101, name: "Ofri" }

let seoncdPiece = { country: "Israel" }

let passport = { ...firstPiece, ...seoncdPiece }

console.log(passport)

let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
]

for (let em of employeesArr) {
  console.log(
    `name: ${em.name ?? "not given"}, id: ${em.id ?? "not given"}, age: ${
      em.age ?? "not given"
    }`
  )
  let x = (em.id && em.age) ?? console.log(`${em.name} have some misssing data`)
}

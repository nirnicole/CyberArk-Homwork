class Animal {
  constructor(name, numLegs, children = []) {
    this.name = name
    this.numLegs = numLegs
    this.children = children
  }

  giveBirth(name) {
    this.children.push(name)
  }
}

const cat = new Animal("Puss", 4)
const dog = new Animal("Dog", 4)

console.log(dog)

class Humen {
  constructor(name, age, isFriendly) {
    this.name = name
    this.age = age
    this.isFriendly = isFriendly
  }
}

const h1 = new Humen("Orya", 23, false)
console.log(
  `${h1.name}, who is ${h1.age} years old, is ${
    h1.isFriendly ? "friendly" : "not friendly"
  }`
) //prints "Mark, who is 31 years old, is friendly"

cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]

class Vehicle {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this._speed = speed
    this._fuel = 0
    Vehicle.carsSold++
  }

  static getInfo() {
    console.log(`Cars sold ${Vehicle.carsSold}`)
  }

  static calculateMoney() {
    console.log(`made ${Vehicle.carsSold * 30000} dollars`)
  }

  /**
   * @param {number} speed
   */
  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive")
    }
    this._speed = speed
  }
  get speed() {
    return this._speed
  }

  set fuel(fuel) {
    if (fuel < 0 || fuel > 150) {
      return console.log("Fuel must be in range (0-150)")
    } else {
      this._fuel = fuel
    }
  }
  get fuel() {
    return this._fuel
  }
}

Vehicle.carsSold = 0
let car1 = new Vehicle(0, 0, 100)
let car2 = new Vehicle(10, 10, 1000)
Vehicle.getInfo()
Vehicle.calculateMoney()

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed) // prints speed=10

c.fuel = 1000
console.log(c.fuel) // prints undefined/0 (depands how you initilize)

c.fuel = 25
console.log(c.fuel) // prints fuel=25

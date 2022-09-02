class Exercises {
  constructor() {}

  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false
  }

  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
  }

  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("")
  }

  //validate should recive an array and return {error: "Need at least one boolean"} if thers no booleans in it, and true if there are more true's than false, and false otherwise
  validate(arr) {
    if (!(arr.includes(true) || arr.includes(false)))
      return { error: "Need at least one boolean" }
    else {
      const truthArr = arr.filter((a) => a === true)
      const falsehArr = arr.filter((a) => a === false)
      return truthArr.length > falsehArr.length
    }
  }

  add(x, y) {
    let stuff = []
    stuff.push(x, y)
  }
}

module.exports = Exercises

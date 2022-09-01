const Exercises = require("./exercises")

test("isEven should return should return true if n is even", () => {
  const ex1 = new Exercises()
  expect(ex1.isEven(4)).toBeTruthy()
  expect(ex1.isEven(11)).toBeFalsy()
})

test("removeAtLeastOne should return an array with at least 1 item less", () => {
  const ex2 = new Exercises()

  const arr = [1, 2, 3, 4, 5]
  const arrLength = arr.length
  expect(ex2.removeAtLeastOne(arr).length).toBeLessThan(arrLength)
})

test(`simplify should return a string without the following chars: {"!", "#", ".", ",", "'" }`, () => {
  const ex3 = new Exercises()

  const str = "ba!te#l"
  const res = "batel"
  expect(ex3.simplify(str)).toMatch(res)
  //   expect(ex3.simplify(str)).not.toMatch(/(!|#|.|,|').*/)
})

test(`validate should recive an array and return {error: "Need at least one boolean"} if thers no booleans in it, and true if there are more true's than false, and false otherwise`, () => {
  const ex4 = new Exercises()
  const arrValidFalse = [true, false, false]
  const arrValidTrue = [true, true, false]
  const arrInvalid = ["a", 1, "abc"]
  const errormsg = { error: "Need at least one boolean" }

  //test invalid
  expect(ex4.validate(arrInvalid)).toEqual(errormsg)

  //test valid
  expect(ex4.validate(arrValidFalse)).toBeFalsy()

  //test valid
  expect(ex4.validate(arrValidTrue)).toBeTruthy()
})

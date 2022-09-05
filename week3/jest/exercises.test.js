const Exercises = require("./exercises")

//ex1
describe("Ex1: isEven should return should return true if n is even", function () {
  const ex1 = new Exercises()
  test("should return true", () => expect(ex1.isEven(4)).toBeTruthy())
  test("should return false", () => expect(ex1.isEven(11)).toBeFalsy())
})

//ex2
test("removeAtLeastOne should return an array with at least 1 item less", () => {
  const ex2 = new Exercises()

  const arr = [1, 2, 3, 4, 5]
  const arrLength = arr.length
  expect(ex2.removeAtLeastOne(arr).length).toBeLessThan(arrLength)
})

//ex3
test(`simplify should return a string without the following chars: {"!", "#", ".", ",", "'" }`, () => {
  const ex3 = new Exercises()

  const str = "ba!te#l"
  const res = "batel"
  expect(ex3.simplify(str)).toMatch(res)
  //   expect(ex3.simplify(str)).not.toMatch(/(!|#|.|,|').*/)
})

//ex4
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

//extention
test("checks whether push has been used in add method", () => {
  const extention = new Exercises()

  const spyOnAdd = jest.spyOn(extention, "add") //creating a spying object on 'add' method, not neccesery
  const spyOnPush = jest.spyOn(Array.prototype, "push") //creating the spying object for push, that actually belong to Array.prototype.
  const isAdding = extention.add(1, 2) //envocing a mock call to the add method, so we can spy on its behaviour

  expect(spyOnAdd).toHaveBeenCalled() //just to verify we are calling add method, not neccesery
  expect(spyOnPush).toHaveBeenCalled() //tracking push is called at least 1 time
})

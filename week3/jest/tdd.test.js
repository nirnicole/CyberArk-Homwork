const ArrayManipulator = require("./tdd")

test("ArrayManipulator should be a class with a method manipulate  that gets 2 arrays and making object of key-value pair based on the current index in both arrays", () => {
  const am = new ArrayManipulator()
  const arrKeys = ["name", "lastName", "age"]
  const arrValues = ["nir", "nicole", 29]

  const result = {
    name: "nir",
    lastName: "nicole",
    age: 29,
  }

  expect(am.manipulate(arrKeys, arrValues)).toEqual(result)
})

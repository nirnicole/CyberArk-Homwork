const myModule = require("./code")

test("add should return sum of a + b", () => {
  let sum = myModule.add(1, 2)
  expect(sum).toBe(3)
})

test("calculateHyp should return square root of the sum of the squared", () => {
  let hyp = myModule.calculateHyp(3, 4)
  expect(hyp).toBe(5)
})

test("should remove all BUGs from list of code", () => {
  let code = [
    "great code",
    "good code",
    "BUG",
    "async await awesome code",
    "BUG",
    "BUG",
    "general code",
  ]
  let bugFreeCode = myModule.removeBugs(code)
  expect(bugFreeCode).not.toContain("BUG")
})

test("should keep only HIGH priority tasks", () => {
  let tasks = [
    { text: "dummy", priority: "HIGH" },
    { text: "dummy", priority: "LOW" },
  ]
  let filteredTasks = myModule.clearLowPriority(tasks)

  expect(filteredTasks.length).toBe(1)
  expect(filteredTasks[0].priority).toBe("HIGH")
})

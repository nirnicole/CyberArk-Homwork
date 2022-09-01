const add = function (a, b) {
  return a + b
}

//spotcheck

const calculateHyp = (x, y) => Math.sqrt(x * x + y * y)

const removeBugs = function (code) {
  return code.map((c) => c != "BUG")
}

const clearLowPriority = (objArr) => {
  return objArr.filter((o) => o.priority === "HIGH")
}

module.exports = { add, calculateHyp, removeBugs, clearLowPriority }

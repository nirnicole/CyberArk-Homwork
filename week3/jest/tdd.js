class ArrayManipulator {
  manipulate(arr1, arr2) {
    let obj = {}
    for (let i in arr1) {
      obj[arr1[i]] = arr2[i]
    }
    return obj
  }
}

module.exports = ArrayManipulator

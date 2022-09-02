const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"
const forthURL = "ww.sald.com"
const fifthURL = "www.sal2d.com"

const urlValidator = function (str) {
  /**
   * returns true if URL starts with www. , the URL must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
  const comEmailPattern = /^(www)+\.+\w+\.+(com)$/

  return str.match(comEmailPattern) ? true : false
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false
console.log(urlValidator(forthURL)) //return false
console.log(urlValidator(fifthURL)) //return true

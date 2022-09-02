const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function (str) {
  /**
   * returns true if email prefix and domain is made strictly out of letters , the email must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const comEmailPattern = /^[\w-\.]+@([\w-])+(.com)$/

  return str.match(comEmailPattern) ? true : false
}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false

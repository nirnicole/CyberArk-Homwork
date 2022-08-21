//constants
const submit = document.getElementById("submit")
const fname = document.getElementById("fname")
const dsalary = document.getElementById("dsalary")
const bday = document.getElementById("bday")
const phone = document.getElementById("phone")
const errorMsg = document.createElement("label")
const form = document.getElementById("form")
const welcomeMsg = document.createElement("h1")

errorMsg.innerText = "Error: "
errorMsg.style.color = "red"
  
//functions
const sendForm = function(){
  let firstName = fname.value
  let salary = dsalary.value
  let birthday = bday.value
  let phoneNumber = phone.value

  if(firstName.length<=2){
    errorMsg.innerText += "name error"
  }else if(salary<10000 || salary>16000){
    errorMsg.innerText += "salary error"
  }else if(!birthday){
    errorMsg.innerText += "birthday error"
  }else if(phoneNumber.length!=10){
    errorMsg.innerText += "phone number error"
  }else{

    form.style.display = "none"
    welcomeMsg.innerText = `Welcome, ${firstName}`
    document.body.appendChild(welcomeMsg)
    //here what we want, no errors
    return
  }

  document.body.appendChild(errorMsg)
}

submit.onclick = sendForm


//events:
// up.onclick = moveUp
// down.onclick = moveDown
// right.onclick = moveRight
// left.onclick = moveLeft

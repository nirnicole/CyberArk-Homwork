//constants
const fname = document.getElementById("fname")
const btnSubmit= document.getElementById("submit")

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }


//functions


//events:
btnSubmit.onclick = function(){
    let name = fname.value

      name = name.toLowerCase()
      if(reservations[name]===undefined){
        console.log("You have no reservation.")
        reservations[name] = {claimed: true}
        }else{
        if(reservations[name].claimed){
            console.log("Hmm, someone already claimed this reservation")
    
        }
        else{
            console.log(`Welcome, ${name}`)
        }
    }
    
}

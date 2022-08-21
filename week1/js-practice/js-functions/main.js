console.log("Hello, world!")



/*

//standart
const isEven = function(num){
    if(num%2==0) return true
    else return false
}

//wild-west
function isEven2(num){
    if(num%2==0) return true
    else return false
}

//print odd numbers
const printOddNumbers = function(arr){
    for(let x of arr){
        if(!isEven(x)){
            console.log(x + "\t")
        }
    }
}

//is a number in an array
const foo = function(arr, num){
    for(let x of arr){
        if(x===num){
            return true
        }
    }
    return false
}

let calculator = {

    add: function(x, y){
        return x+y
    },
    subtract: function(x, y){
        return x-y
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

const increaseByNameLength = function(name, amount){
    return name.length*amount
}

const makeRegal = function(name){
    return "His Royal Highness, " + name
}

//test
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

*/



/*
const story = "In the beginning there was light. Then there were wolves. \
Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, \
the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}





const countWords = function(text) {

    //clear all special characters
    for( let c of specialChars){
        text = cleanString(text, c)
    }

    // divide to words
    let wordArray = text.split(" ")
    
    // map words
    for(let word of wordArray){
        wordCounts[word] = (wordCounts[word] || 0) 
        wordCounts[word] +=1 

    }

    return text
}

const cleanString = function(text, char){
    return text.split(char).join(" ")

}

countWords(story)
console.log(wordCounts)



*/


// Splice challange~!
/*
    Parameters:
        array = An array (inplace manipulation)
        index = The index at which to start changing the array.
        amount = An integer indicating the number of elements in the array to remove from start.
        values = 0 to infinity values to implement to the array, starting from the given index.

    Return value:
        result = An array containing the deleted elements.
    */
const splice = function(array, index, amount, ...values) {  
    
    // edge cases
    if(amount === undefined){
        amount = array.length-index         //not given -> means till the end of it.
    }else if(amount<0){
        amount = 0                          //we'll ignore negetive amount.
    }

    if(index<0){
        index = array.length+index          //
    }

    let i = index                           //represents the end of the right part of our array
    let j = index+amount                        //represents the start of the left part of our array
    const N = array.length
    const tempArray = []                    //used to hold the final right side of our array, O(n) in space
    const result = []                       //used to hold the the return deleted items

    //record the items for removal for later (the return array)
    while(i<j){
        result.push(array[i++])
    }
    i = index                               //initilize it back to index


    //record the new values for later concatenation.
    for(let v of values){
        tempArray.push(v)
    }

    //add to them (at the end) any value in array that apears AFTER the forbiden section (those values we do want)
    while(j<N){
        tempArray.push(array[j++])
    }

    //despose any value in array that comes after 'index'
    let end = index+tempArray.length
    while(array.length>index){
        array.pop()
    }

    //copy our temp left side to the original array (starting from index, that now is actually the end of it).
    while(tempArray.length>0){
        array.push(tempArray.shift())
    }
    

    return result
  }  

  
// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(arr); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(arr); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(arr); 
console.log(deleted); //should be [] 

// returns an empty array when no elements are deleted
arr = [1,2,3,4,5]
deleted = splice(arr,-3,2,192,12); 
console.log(arr); 
console.log(deleted); //should be [] 



// overriding the native splice method
Array.prototype.splice = function(index, amount, ...values){
    
    // edge cases
    if(amount === undefined){
        amount = this.length-index         //not given -> means till the end of it.
    }else if(amount<0){
        amount = 0                          //we'll ignore negetive amount.
    }

    if(index<0){
        index = this.length+index          //
    }

    let i = index                           //represents the end of the right part of our array
    let j = index+amount                        //represents the start of the left part of our array
    const N = this.length
    const tempArray = []                    //used to hold the final right side of our array, O(n) in space
    const result = []                       //used to hold the the return deleted items
    const array = this                      //refrence for convinience.

    //record the items for removal for later (the return array)
    while(i<j){
        result.push(array[i++])
    }
    i = index                               //initilize it back to index


    //record the new values for later concatenation.
    for(let v of values){
        tempArray.push(v)
    }

    //add to them (at the end) any value in array that apears AFTER the forbiden section (those values we do want)
    while(j<N){
        tempArray.push(array[j++])
    }

    //despose any value in array that comes after 'index'
    let end = index+tempArray.length
    while(array.length>index){
        array.pop()
    }

    //copy our temp left side to the original array (starting from index, that now is actually the end of it).
    while(tempArray.length>0){
        array.push(tempArray.shift())
    }
    
    console.log("you see? splice is actually overriden:)!")
    return result
  }  


  // returns an empty array when no elements are deleted
arr = [1,2,3,4,5]
deleted = arr.splice(-3,2,192,12); 
console.log(arr); 
console.log(deleted); //should be [] 
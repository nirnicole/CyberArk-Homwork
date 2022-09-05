
type phoneNumber = string | string[] | number | number[]

function printNumbers( numbers: phoneNumber):void {
    if (Array.isArray(numbers)) {
        console.log("Array: " + numbers);
    } else if (typeof numbers === 'string') { 
        console.log('string: ' + numbers);
    } else if (typeof numbers === 'number') {
        console.log('number: ' + numbers);
    }
    
}

printNumbers(972528684411);
printNumbers([972528684411, 9725242223]);
printNumbers("052863423243");
printNumbers(["052343434286", "0547734343"]);
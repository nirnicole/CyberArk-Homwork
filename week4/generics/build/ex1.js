"use strict";
function sum(values) {
    let result = 0;
    if (Array.isArray(values)) {
        values.forEach((v) => (result += Number.isNaN(Number(v)) ? 0 : Number(v)));
    }
    else if (typeof values === 'string' || typeof values === 'number') {
        result = Number(values);
    }
    return result;
}
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));

"use strict";
class Numbers {
    constructor(values) {
        this.values = values;
    }
    addNumber(value) {
        this.values.push(value);
    }
    sum() {
        let sum = 0;
        this.values.forEach(elem => {
            if (typeof elem === 'string' || typeof elem === 'number') {
                sum += this.getNumValue(elem);
            }
        });
        return sum;
    }
    getNumValue(val) {
        if (typeof val === 'string') {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else {
            return Number(val);
        }
    }
}
const numbers1 = new Numbers(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Numbers([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);

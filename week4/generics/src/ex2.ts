
class Numbers<Type>{

    values:Type[] 

    constructor(values: Type[]){
        this.values = values
    }

    addNumber(value: Type) {
        this.values.push(value)
    }

    sum(): number {
            let sum: number = 0;
            this.values.forEach(elem => {
                if (typeof elem === 'string' || typeof elem === 'number') {
                    sum += this.getNumValue(elem)
                }
            });            
            return sum;
    }

    getNumValue(val: string | number): number {
        if (typeof val === 'string') {
            const num: number = parseInt(val);
            return !isNaN(num) ? num : 0;
        } else {
            return Number(val);
        }
    }

}


const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
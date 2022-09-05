class Student {
    fullName: string
    age: number
    grades: number[]


    constructor (name: string, age: number, grades: number[]){
        this.fullName = name
        this.age = age
        this.grades = grades
    }

    addGrade(grade: number) {
        this.grades.push(grade)
    }
    getGradeAvg(): number {
        let sumArr: number = 0
        this.grades.forEach(g => sumArr+=g)
        return sumArr/this.grades.length
        }
}


const student1: Student = new Student("John Smith", 23, [77,68,99,98]);
const student2: Student = new Student("Mike Johnson", 35, [84,85,75,88]);
const student3: Student = new Student("Jeff Howard", 32, [79,92,94,96]);
  
const students: Student[] = [student1, student2, student3];

students.forEach(student => {
    console.log(`${student.fullName}: ${student.getGradeAvg()}`);
});
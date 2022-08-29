//write your code here to make the tests pass

class Document {
  constructor(emName) {
    this.EmployeeName = emName
  }
}

class Employee {
  constructor(name) {
    this.name = name
  }

  work(office) {
    for (let index = 0; index < 10; index++) {
      office.documents.push(new Document(this.name))
    }
  }
}

class Manager {
  constructor(name, employees = []) {
    this.employees = employees
    this.name = name
  }

  hireEmployee(name) {
    this.employees.push(new Employee(name))
  }
  askEmployeesToWork(office) {
    this.employees.forEach((e) => e.work(office))
  }
}

class Cleaner {
  constructor(name) {
    this.name = name
  }

  clean() {
    console.log("Clean")
  }
}

class Office {
  constructor(documents = [], managers = [], cleaners = []) {
    this.documents = documents
    this.managers = managers
    this.cleaners = cleaners
  }

  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name))
  }
  hireManager(name) {
    this.managers.push(new Manager(name))
  }

  startWorkDay() {
    this.managers.forEach((m) => m.askEmployeesToWork(this))
    this.cleaners.forEach((c) => c.clean())
  }
}

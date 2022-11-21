// Phrasing 1:
// A class/module/function should have a single responsibility
// Phrasing 2:
// Each module should be responsible to one, and only one, owner or stakeholder
// Not to Be Confused with:
// The most important thing is not to confuse this principle with
// “FUNCTIONS SHOULD DO ONE THING” which is also a Robert C Martin principle from the clean code guide. (which is, none the less a very important guideline)

//usual case:
class Employee {
	calcPayment() {}

	reportHours() {}

	writeEmployee() {
		// saves the employee to a db
	}
}
//3 responsebilities - thats bad!

//solid example:
class Finance {
	calcPayment() {}
}

class Hr {
	reportHours() {}
}

class Rd {
	writeEmployee() {}
}

class SolidEmployee {
	work() {}
}
soldierOfSolid = new SolidEmployee()
Finance.calcPayment(soldierOfSolid)
Hr.reportHours(soldierOfSolid)
Rd.writeEmployee(soldierOfSolid)

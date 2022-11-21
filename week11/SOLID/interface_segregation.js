// Interface Segregation
// Definition:
// A client should never be forced to implement an interface that it doesn’t use.
// In Other Words:
// Separate between unrelated functionalities.

// bad example:
class BadBird {
	constructor(type) {
		this.type = type
	}

	tweet() {
		console.log("tweet tweet")
	}

	// not every bird flies!
	fly() {
		console.log("I'm Flying")
	}
}

// lets fix:
class Bird {
	constructor(type) {
		this.type = type
	}

	tweet() {
		console.log("tweet tweet")
	}
}

const flier = {
	fly: function () {
		console.log(this.type, "is flying")
	},
}

const swimmer = {
	swim: function () {
		console.log(this.type, "is swimming")
	},
}

function addAbilities(object, abilities) {
	Object.assign(object, abilities)
}

class Penguin extends Bird {
	constructor() {
		super("Penguin")
		addAbilities(this, swimmer)
	}
}

// we can also add abilitiesto all instances at once:
class Swan extends Bird {
	constructor() {
		super("Swan")
	}
}
addAbilities(Swan.prototype, flier)
addAbilities(Swan.prototype, swimmer)

// spotchack:
const singer = {
	sing: function () {
		console.log(
			this.type,
			"im covering my ears like a kid, when your words mean nothing i go bla bla bla"
		)
	},
}

class HummingBird extends Bird {
	constructor() {
		super("hummingbird")
	}
}
addAbilities(HummingBird.prototype, flier)
addAbilities(HummingBird.prototype, singer)

let madona = new HummingBird()
madona.fly()
madona.sing()

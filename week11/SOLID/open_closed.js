// Definition
// Modules should be open for extension, but closed for modification.

// open for extention ONLY with modification:
function makeSounds(animals) {
	for (let animal of animals) {
		let sound = ""
		switch (animal.type) {
			case "Cat":
				sound = "Miao"
				break
			case "Sparrow":
				sound = "tweet tweet"
				break
			case "Cow":
				sound = "Moo"
				break
		}
		console.log(sound)
	}
}

// open for extention Without modification:
class Animal {
	constructor(type) {
		this.type = type
	}

	makeSound() {
		console.log("hello")
	}
}

class Cat extends Animal {
	constructor() {
		super("Cat")
	}

	makeSound() {
		console.log("Miao")
	}
}

class Sparrow extends Animal {
	constructor() {
		super("Sparrow")
	}

	makeSound() {
		console.log("tweet tweet")
	}
}

class Cow extends Animal {
	constructor() {
		super("Cow")
	}

	makeSound() {
		console.log("Moo")
	}
}

function makeSounds(animals) {
	for (let animal of animals) {
		animal.makeSound()
	}
}

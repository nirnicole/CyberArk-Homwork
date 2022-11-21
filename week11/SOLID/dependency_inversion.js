// Definition:
// High-level modules should not depend on low-level modules.
// Both should depend on the abstraction.
// Abstractions should not depend on details.
// Details should depend on abstractions.

// bad parctice, charCounter is depandent on its implementation:
function increaseCount(char, charCounter) {
	let count = charCounter[char] || 0
	charCounter[char] = count + 1
}

function increaseCount(char, charCounter) {
	let code = char.charCodeAt() - 97
	charCounter[code] = (charCounter[code] || 0) + 1
}

// lets fix this with abstaction:
function increaseCount(char, charCounter) {
	let currentCount = charCounter.getCount(char)
	charCounter.setCount(char, currentCount + 1)
}

class CharCounter {
	constructor() {
		this.counts = {}
	}

	getCount(char) {
		return this.counts[char] || 0
	}

	setCount(char, newCount = 0) {
		this.counts[char] = newCount
	}
}

function increaseCount(char, charCounter) {
	let currentCount = charCounter.getCount(char)
	charCounter.setCount(char, currentCount + 1)
}

class CharCounter {
	constructor() {
		this.counts = []
	}

	getCount(char) {
		let charCode = char.charCodeAt() - 97
		return this.counts[charCode] || 0
	}

	setCount(char, newCount = 0) {
		let charCode = char.charCodeAt() - 97
		this.counts[charCode] = newCount
	}
}

function increaseCount(char, charCounter) {
	let currentCount = charCounter.getCount(char)
	charCounter.setCount(char, currentCount + 1)
}

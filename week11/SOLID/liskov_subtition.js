// Liskov Substitution
// Definition:
// if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program
// Definition 2:
// A superclass object should be replaceable with a subclass object without breaking the functionality of the software

//The Liskov Substitution principle here is violated:
class Rectangle {
	constructor(width, height) {}

	setWidth(width) {}

	setHeight(height) {}
}

class Square extends Rectangle {
	//...
}

// we shuld do:
class liskovRectangle {
	constructor(width, height) {}

	setWidth(width) {}

	setHeight(height) {}
}

class liskovSquare extends liskovRectangle {
	constructor(edge) {
		this.width = edge
		this.height = edge
	}

	setWidth(edge) {
		this.width = edge
		this.height = edge
	}
	setHeight(edge) {
		this.width = edge
		this.height = edge
	}
}

function Singleton() {
	class SingletonData {
		constructor() {
			this.notes = ["do", "re", "me", "fa", "sol", "la", "si"]
		}

		getNotes(count) {
			return this.notes.slice(0, count)
		}
	}

	const _instance = new SingletonData()
	function getInstance() {
		return _instance
	}

	return {
		getInstance,
	}
}

const notes = Singleton().getInstance().getNotes(3)

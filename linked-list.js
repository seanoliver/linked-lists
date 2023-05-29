/** Node: node for a singly linked list. */

class Node {
	val = null;
	next = null;

	constructor(val) {
		this.val = val;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	head = null;
	tail = null;
	length = 0;

	constructor(vals = []) {
		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return undefined;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (this.head === null) throw new Error('Empty list!');
		const oldTail = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			let current = this.head;

			while (current.next !== this.tail) {
				current = current.next;
			}

			this.tail = current;
			current.next = null;
		}

		this.length--;

		if (this.length === 1) {
			this.head = this.tail;
		}

		return oldTail.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		if (this.head === null) throw new Error('Empty list!');
		const oldHead = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.tail = this.head;
		}
		return oldHead.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		return current.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		current.val = val;
		return undefined;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Invalid index');
		} else if (idx === 0) {
			this.unshift(val);
		} else if (idx === this.length) {
			this.push(val);
		} else {
			let current = this.head;
			let prev;
			let counter = 0;

			while (counter < idx) {
				prev = current;
				current = current.next;
				counter++;
			}
			const newNode = new Node(val);
			newNode.next = current;
			prev.next = newNode;
			this.length++;
		}
		return undefined;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Invalid index');
		}

		let targetNodeVal = this.getAt(idx);

		if (idx === 0) {
			this.shift();
		} else if (idx === this.length) {
			this.pop();
		} else {
			let current = this.head;
			let prev;
			let counter = 0;

			while (counter < idx) {
				prev = current;
				current = current.next;
				counter++;
			}

			prev.next = current.next;
			this.length--;
		}
		return targetNodeVal;
	}

	/** average(): return an average of all values in the list */

	average() {
		if(this.length===0)return 0;

		let total = 0;
		let idx = 0;

		while(idx!==this.length){
			total+=this.getAt(idx);
			idx++;
		}
		
		return total/this.length;

	}
}

module.exports = LinkedList;
0
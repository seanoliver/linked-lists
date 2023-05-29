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

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
		// current = current.next;
      if (current.next === this.tail) {
        break;
      }else{
		current=current.next;
	  }
      
    }

    const oldTail = this.tail;
    this.tail = current;
	current.next = null;
    this.length--;

    return oldTail.val;
  }

	/** shift(): return & remove first item. */

	shift() {
		if (this.head === null) throw new Error('Empty list!');
		const oldHead = this.head;
		this.head = this.head.next;
		this.length--;
		if(length===0){
			this.tail = this.head;
		}
		return oldHead.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if(idx <0 || idx>=this.length){
			throw new Error('Invalid index');
		}
		let current=this.head;
		for(let i=0; i<idx; i++){
			current = current.next;

		}
		return current.val;

	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if(idx <0 || idx>=this.length){
			throw new Error('Invalid index');
		}
		let current=this.head;
		for(let i=0; i<idx; i++){
			current = current.next;

		}
		current.val = val;
		return undefined;

	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if(idx <0 || idx>=this.length){
			throw new Error('Invalid index');
		}

		if (idx===0){
			this.unshift(val);
		}

		if(idx===this.length-1){
			this.push(val);
		}

		let current = this.head; 
		let prev;
		for(let i=0; i<idx; i++){
			prev = current;
			current = current.next;
		}

		const newNode = new Node(val);
		newNode.next = current;
		prev.next = newNode;
		this.length++;
		return undefined;

		
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {}

	/** average(): return an average of all values in the list */

	average() {}
}

module.exports = LinkedList;

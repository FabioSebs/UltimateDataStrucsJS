class LinkedList {
	constructor() {
		//Since tail and head are null when list is empty
		this.head = this.tail = null
	}

	append(value){
		// if list is empty
		if(!this.tail){
			this.head = this.tail = new Node(value)
		} 
		// Adding new tail and updating pointers
		else {
			let oldTail = this.tail
			this.tail = new Node(value)
			oldTail.next = this.tail
			this.tail.prev = oldTail
		}
	}

	prepend(value){
		// Checking if list is empty
		if (!this.head) {
			this.head = this.tail = new Node(value)
		} 
		// Adding head and updating pointers
		else {
			let oldHead = this.head
			this.head = new Node(value)
			oldHead.prev = this.head
			this.head.next = oldHead
		}
	}

	deleteHead(){
		// if list is empty
		if (!this.head) {
			return null
		} 
		// delete head and update
		else {
			let removedHead = this.head
			
			// 1 node left
			if (this.head === this.tail) {
				this.head = this.tail = null
			} 
			// Updating pointers
			else {
				this.head = this.head.next
				this.head.prev = null
			}
			return removedHead.value			
		}
	}

	deleteTail(){
		// if list is empty
		if (!this.tail) {
			return null
		} else {
			let removedTail = this.tail
			// 1 node left
			if (this.head === this.tail) {
				this.head = this.tail = null
			} else {
				this.tail = this.tail.prev
				this.tail.next = null
			}
			return removedTail.value
		}
	}

	search(value) {
		let currentNode = this.head

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}
}

class Node {
	constructor(value, prev, next){
		this.value = value
		this.prev = prev || null
		this.next = next || null
	}
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)

list.search(1)
list.search(3)
list.search(999)

console.log(list)
console.log(list.deleteHead())
console.log(list.deleteTail())



















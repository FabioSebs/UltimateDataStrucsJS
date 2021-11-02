//Node
class Node {
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

//Tree
class BinarySearchTree{
	constructor(){
		this.root = null
		this.count = 0
	}

	size() {
		return this.count
	}

	insert(value) {
		this.count++
			
		//Make A New Node
		let newNode = new Node(value)
		
		// Current Node
		let currentNode = this.root

		if (currentNode === null) {
			this.root = newNode
		}

		const searchTree = node => {
			//if value < node.value , go left
			if (value < node.data){
				// if left is empty add node
				if (!node.left) {
					node.left = newNode
				} 
				// recursively call func with node.left
				else {
					searchTree(node.left)
				}
			}
			//if value > node.value, go right
			else if (value > node.data){
				// if right is empty add node
				if(!node.right) {
					node.right = newNode
				}
				// recursively call func with node.right
				else {
					searchTree(node.right)
				}
			}
		}
		//Initiates the searching and adding
		searchTree(this.root)

	}

	min(){ 
		// Current Node
		let currentNode = this.root
		//Keep traversing left until left is empty
		while (currentNode.left) {
			// Update currentNode
			currentNode = currentNode.left
		}
		return currentNode.data
	}

	max() {
		//Current Node
		let currentNode = this.root
		//Keep traverisng right until right is empty
		while (currentNode.right) {
			currentNode = currentNode.right
		}
		return currentNode.data
	}

	contains(target) {
		// Make currentNode
		let currentNode = this.root

		while(currentNode){
			//base case
			if(target === currentNode.data){
				return true
			}
			// traversing
			if(target < currentNode.data){
				currentNode = currentNode.left
			} else {
				currentNode = currentNode.right
			}

		}

		return false

	}
	
	// left, root, right
	dfsInOrder() {
		let result = []
		
		const traverse = node => {
			// if left child exists go left again
			if (node.left) { traverse(node.left) }
			// capture root node value
			result.push(node.data)
			//if right exists go right
			if (node.right) { traverse(node.right) }
		}
		
		traverse(this.root)
		return result
	}
	
	// root, left, right
	dfsPreOrder() {
		let result = []

		const traverse = node => {
			// capture root node value
			result.push(node.data)

			// if left child exists go left again
			if (node.left) { traverse(node.left) }

			// if right child exists go right again
			if (node.right) { traverse(node.right) }
		}
		traverse(this.root)
		return result
	}
	
	// left, right, root
	dfsPostOrder() {
		let result = []
		
		const traverse = node => {
			// if left child exists, go left again
			if (node.left) { traverse(node.left) }
			// if right child exists go right again
			if (node.right) { traverse(node.right) }
			// capture root node value
			result.push(node.data)
		}

		traverse(this.root)
		return result
	}
	
	//level by level - uses queue!
	bfs() {
		let result = []
		let queue = []

		queue.push(this.root)

		while(queue.length) {
			let currentNode = queue.shift()
			result.push(currentNode)

			if (currentNode.left){
				queue.push(currentNode.left)
			}
			if (currentNode.right) {
				queue.push(currentNode.right)
			}

		}

		return result
	}
}

const bst = new BinarySearchTree()
bst.insert(50)
bst.insert(25)
bst.insert(75)
bst.insert(80)
bst.insert(15)
bst.insert(100)
console.log(bst)
console.log(bst.contains(25))
console.log(bst.contains(9))
console.log(bst.dfsInOrder())
console.log(bst.dfsPostOrder())
console.log(bst.dfsPreOrder())









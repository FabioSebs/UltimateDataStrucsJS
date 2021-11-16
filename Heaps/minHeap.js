// Min Heap Implementation by Fabio Espinoza


class minHeap{
	// Array Implementation
	constructor(){
		this.nodes = []
	}
	
	// Insertion and Heapify Up
	insert(val) {
		this.nodes.push(val)
		this.heapifyUp(this.nodes.length-1)
	}
	
	// Gets Parent via Formula
	getParent(index) {
		return Math.floor((index-1)/2);
	}
	
	// Gets Left Child via Formula
	leftChild(index) {
		return (index*2) +1;
	}
	
	// Gets Right Child via Formula
	rightChild(index){
		return (index*2)+2;
	}
	
	// Checks if Node is Leaf by first checking if the index given is towards the end of the tree and is within index bounds 
	isLeaf(index){
		return(
			index >= Math.floor(this.nodes.length / 2) && index <= this.nodes.length -1
		)
	}
	
	// While not the root we check if the parent of the index given is greater , if so we swap and update our index to go up the tree
	heapifyUp(index) {
		while (index > 0) {
			// getting parent via formula
			let parentIdx = this.getParent(index)
			
			if (this.nodes[parentIdx] > this.nodes[index]) {
				this.swap(this.data[parentIdx], this.data[index])
			} 

			index = parentIdx;
		}
	}

	// Swapping with ES6 Javascript , can also do it with Python
	swap(node1,node2) {
		[node1, node2] = [node2 , node1]
	}
	
	// We get a minimum value which is the root and return it. Also we make the root the last element in the tree and call heapifyDown on it.
	extractMin(){
		let min = this.nodes[0]
		this.nodes[0] = this.nodes.pop()
		this.heapifyDown(0);
		return min
	}
	
	// We recurscively call heapifyDown until we are at a leaf and update the variables based on conditionals
	heapifyDown(index) {
		if (!this.isLeaf(index)){
			let leftChildIndex = this.leftChild(index)
			let rightChildIndex = this.rightChild(index)

			let firstIndex = index

			if (this.nodes[leftChildIndex] < this.nodes[firstIndex]){
				firstIndex = rightChildIndex
			}

			if (firstIndex !== index){
				this.swap(index, firstIndex);
				this.heapifyDown(firstIndex);
			}
		}
	}
	
	print() {
		let i = 0;
		while(!this.isLeaf(i)) {
			console.log("Parent:", this.nodes[i]);
			console.log("Left Child:", this.nodes[this.leftChild(i)])
			console.log("Right Child:", this.nodes[this.rightChild(i)])
			i++
		}
	}
}

const test = new minHeap()
test.insert(4)
test.insert(6)
test.insert(14)
test.insert(21)
test.insert(8)
test.insert(19)
test.insert(35)
test.insert(22)
test.insert(38)
test.insert(55)
test.insert(10)
test.insert(20)
test.print()




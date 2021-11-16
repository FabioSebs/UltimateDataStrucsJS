class MaxHeap {
	constructor(){
		this.nodes = []
	}

	getParent(index) {
		return Math.floor((index-1)/2);
	}

	leftChild(index) {
		return (index*2) +1;
	}

	rightChild(index){
		return (index*2)+2;
	}

	isLeaf(index){
		return(
			index >= Math.floor(this.nodes.length / 2) && index <= this.nodes.length -1
		)
	}

	swap(index1,index2){
		[this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]];
	}

	add(element){
		this.nodes.push(element)
		this.heapifyUp(this.nodes.length-1);
	}

	heapifyUp(index){
		let currentIndex = index
		let parentIndex = this.getParent(currentIndex)

		while (currentIndex > 0 && this.nodes[currentIndex] > this.nodes[parentIndex]) {
			this.swap(currentIndex, parentIndex)
			currentIndex = parentIndex
			parentIndex = this.getParent(parentIndex)
		}
	}
	
	extractMax() {
		if(this.nodes.length < 1) return 'heap is empty';

		const max = this.nodes[0];
		const end = this.nodes.pop();

		this.nodes[0] = end;

		this.heapifyDown(0)

		return max
	}
	
	heapifyDown(index) {
		if (!this.isLeaf(index)){
			let leftChildIndex = this.leftChild(index)
			let rightChildIndex = this.rightChild(index)

			let largestIndex = index

			if (this.nodes[leftChildIndex] > this.nodes[largestIndex]){
				largestIndex = rightChildIndex
			}

			if (largestIndex !== index){
				this.swap(index, largestIndex);
				this.heapifyDown(largestIndex);
			}
		}
	}

	buildHeap(array) {
		this.nodes = array;
		for (let i = Math.floor(this.nodes.length / 2); i >= 0; i--) {
			this.heapifyDown(i)
		}
	}

	peek() {
		return this.values[0]
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






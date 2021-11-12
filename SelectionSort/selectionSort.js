
const selectionSort = (arr) => {
    //looping through array
    for (let i = 0; i < arr.length - 1; i++) {
        
	//minimum variable
	let min = i

	//nested for loop to compare two elements at a time
        for (let j = i + 1; j < arr.length; j++) {
	    //comparing index i+1 to i 
            if (arr[j] <= arr[min]) {
                min = j
            }
	    //swapping
	    [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

const getData = (number) => {
	let arr = []
	for (let i = 0; i <= number; i++) {
		arr.push(Math.round(Math.random() * number))
	}
	return arr
}

thirtyTwoArray = selectionSort(getData(32))
oneTwentyEightArray = selectionSort(getData(128))
console.log(selectionSort(thirtyTwoArray))
console.log(selectionSort(oneTwentyEightArray))

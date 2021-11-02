let mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return mergeSortUtil(mergeSort(left), mergeSort(right))
}

let mergeSortUtil = (left, right) => {
    const array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())
        }
        else {
            array.push(right.shift())
        }
    }

    return array.concat(left.slice()).concat(right.slice());
}

console.log(mergeSort([6, 44, 4, 3, 2, 1]))
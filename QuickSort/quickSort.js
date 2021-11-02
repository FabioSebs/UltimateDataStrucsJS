//Quick Sort - Divid and Conquer Algrithm

let quickSort = (arr) => {
    //base case
    if (arr.length <= 1) {
        return arr;
    } else {
        let left = [], right = [], newArray = [];
        let pivot = arr.pop();
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
};
let items = [8, 7, 6, 1, 2, 3, 4, 5];
let sorted = quickSort(items);
console.log(sorted);

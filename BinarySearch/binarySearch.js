const binarySearch = (arr, target, start, end) => {
    let mid = Math.floor((start + end) / 2)

    if (start > end) {
        return false;
    }

    if (arr[mid] == target) {
        return true
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1)
    }
    else {
        return binarySearch(arr, target, mid + 1, end)
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let target = 0

console.log(binarySearch(arr, target, 0, arr.length - 1))
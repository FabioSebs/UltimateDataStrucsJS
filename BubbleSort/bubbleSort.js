function bubbleSort(arr) {
  let times = arr.length;

  while (times != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    times--;
  }

  return arr;
}

let list = [6, 5, 4, 3, 2, 1];
let sortedList = bubbleSort(list);
console.log(sortedList);

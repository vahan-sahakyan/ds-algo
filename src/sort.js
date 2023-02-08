const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//
//
//
//
//
//
//
/**
 *
 * mergeSort function
 *
 * @param {number[]} array
 * @returns number[]
 */
function mergeSort(array) {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
/**
 * merge function
 * @param {number[]} left
 * @param {number[]} right
 * @returns number[]
 */
function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  console.log(left, right);
  return [...result, ...left.slice(leftIdx), ...right.slice(rightIdx)];
}
const result = mergeSort(numbers);

console.log(...result);
// for (n of result) console.log(n);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // put smallest first
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // loop in left side and find the spot that fits, if bigger - nothing fits, keep the same place
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
// insertionSort(numbers);
// for (n of numbers) console.log(n);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
// bubbleSort(numbers);
// for (n of numbers) console.log(n);

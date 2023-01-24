// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function getFirstRecurring(array) {
  const history = {};
  for (let i = 0; i < array.length; i++) {
    if (history[array[i]]) {
      console.log(history);
      return array[i];
    }
    history[array[i]] = true;
  }
  console.log(history);
  return undefined;
}

console.log(getFirstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(getFirstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(getFirstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5
console.log(getFirstRecurring([2, 3, 4, 5])); // undefined

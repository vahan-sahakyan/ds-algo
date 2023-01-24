const isAnyExist = (item1, item2) => item1 || item2;
const isFirstLess = (item1, item2) => item1 < item2;

mergeSortedArrays = function (array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  while (isAnyExist(array1Item, array2Item)) {
    if (!array2Item || isFirstLess(array1Item, array2Item)) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
};

const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

console.log({ result });

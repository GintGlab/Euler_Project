// сложность O(N log N)
const arr = [1, 140, 10, 15, 88, 92, 540, 44, 23, 23, 4, 0 , 1]

const mergeSortedArrays = (arr1, arr2) => {
  const sortedArray = [];
  let i = j = 0;

  while (i < arr1.length && j < arr2.length) {
    sortedArray.push((arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++])
  }

  return [
    ...sortedArray,
    ...arr1.slice(i),
    ...arr2.slice(j),
  ]
}

const mergeSort = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return null
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length/2)
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle)
  return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray))
}

console.log(mergeSort(arr))

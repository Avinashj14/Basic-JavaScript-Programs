//Find the second largest element in an array:

function findSecondLargest(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  return sortedArr[1];
}


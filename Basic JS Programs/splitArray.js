//Split an array into chunks of a specific size:

function chunkArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,3,4,5,2],4))
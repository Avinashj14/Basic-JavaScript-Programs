//Remove a specific element from an array:
function removeElement(arr, element) {
  return arr.filter(item => item !== element);
}

console.log(removeElement([1,2,3,4,1,3,1],1))



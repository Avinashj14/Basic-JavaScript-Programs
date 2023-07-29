// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
  let x=str.split(" ")
  let maxLength = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i].length > maxLength) {
      maxLength = x[i].length;
    }
  }

  return maxLength;
}
// function findLongestWordLength(str) {
//   return Math.max(...str.split(" ").map(word => word.length));
// }

findLongestWordLength("The quick brown fox jumped over the lazy dog");
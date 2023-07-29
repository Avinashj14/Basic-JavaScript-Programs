// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.



function titleCase(str) {
  let x= str.split(" ");
  let modified= x.map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase());
  let result=modified.join(" ");

  
  return result;
}

console.log(titleCase("I'm a little tea pot"));
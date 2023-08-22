// Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.






// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
let newArray=[...arr];
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
  let newArray=[...arr];
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    // Change code above this line
    }
}
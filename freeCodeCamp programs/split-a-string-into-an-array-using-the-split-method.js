//Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.


function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

splitify("Hello World,I-am code");


//str.split(/\W/): The split method is used on the str string. The argument /\W/ is a regular expression that matches any non-word character. In regular expressions, \W represents any non-word character (letters, digits, or underscores). By using this regular expression as the separator, the split method will divide the input string into an array of substrings wherever it finds non-word characters.
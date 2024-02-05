// Double the Numbers: Write a function that takes an array of numbers and returns a new array where each number is doubled.

const { toNamespacedPath } = require("path")

// Convert Celsius to Fahrenheit: Write a function that takes an array of temperatures in Celsius and returns a new array where each temperature is converted to Fahrenheit using the formula: 

// Square the Numbers: Write a function that takes an array of numbers and returns a new array where each number is squared.

// Extract Names: Given an array of objects where each object has a 'name' property, write a function that returns a new array containing only the names.

// Calculate Area: Given an array of rectangles where each rectangle is represented by an object with 'width' and 'height' properties, write a function that returns a new array containing the area of each rectangle.



// function double(n){
//     return n.map(n=>n*2)
// }
// const n=[1,2,3,4,5,6]
// console.log(double(n))

// function names(pepole){
//     return pepole.map(n=>n.name)
// }
// const pepole=[
//     {name:"as",age:34},
//     {name:"vzxlkc",age:34},
//     {name:"aszcvz",age:34},

// ]

// console.log(names(pepole))


// function area(rec){
//     return rec.map(rec=>rec.width*rec.height);
// }
// const rectangles = [
//     { width: 5, height: 10 },
//     { width: 3, height: 7 },
//     { width: 8, height: 2 }
//   ];
//   console.log(area(rectangles))



// capitalize naems

// function capital(name){
//     return name.map (name=> name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())
// }
// const names=["ajay","deep","rohit"];

// console.log(capital(names))



// reverseSttring 


// function reverse(string){
//     return string.map(str=>str.split('').reverse('').join(''))
// }

// const string=["hellow"]

// console.log(reverse(string))



// stringpalindrome


function palindrome(str){
    return str==str.split("").reverse().join('')
   
}

const strings = ["level", "hello", "radar", "javascripdt"];

const palindromes = strings.filter(str =>palindrome(str));

console.log(palindromes);

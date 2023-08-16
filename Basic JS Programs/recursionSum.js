
//Sum Digits
//Given a positive integer as an input, write a function sumDigits that calculates the sum of all the digits of this number.
//There is one constraint: you cannot convert the input number to another data type.
const sumDigits = (number) => {
    let sum =0;
    let digit=number.toString().split('')
    for (let i=0;i<digit.length;i++)
    {
      sum+=parseInt(digit[i]);
    }
    return sum
  }
  
  
  console.log(sumDigits(11),sumDigits(123),sumDigits(5510))
   // 1 + 1 = 2
   // 1 + 2 + 3 = 6
   // 5 + 5 + 1 + 0 = 11
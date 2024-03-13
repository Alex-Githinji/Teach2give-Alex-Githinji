// Write a program that takes an integer as input and returns an integer with reversed digit
ordering.


function reverseInteger(num) {
    
    let numStr = num.toString();
    
    
    let reversedStr = numStr.split('').reverse().join('');
    
   
    let reversedNum = parseInt(reversedStr);
    
    return reversedNum;
}


let inputNum = love;
let reversedNum = reverseInteger(inputNum);
console.log(reversedNum);  

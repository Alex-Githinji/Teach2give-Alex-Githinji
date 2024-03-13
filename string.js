// Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.


function capitalizeFirstLetter(str) {

    let words = str.split(' ');

    
    for (let i = 0; i < words.length; i++) {
    
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    
    return words.join(' ');
}


let inputString = "Good morning";
let capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); 

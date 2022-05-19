// JavaScript file for 03-JavaScript-Challenge

// Generates a password based on prompted specifications from user
function generatePassword() {

  // Arrays of possible password characters
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let specialChar = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','\`','{','|','}','~'];
  
  // Bools to store if a character tyoe is selected
  let useNumber;
  let uselower;
  let useUpper;
  let useSpecial;

  let passLength;
  let password = ""

  // Asks user to input length
  // Checks that a valid length has been input
  function lengthChecker() {
    let result = prompt("How many characters do you want in the password?\nThe password must be at least 8 characters and no mre than 128");
    result = parseInt(result);
    if(result < 8 || result > 128 || isNaN(result)) {
      alert("An invalid length has been submitted. Please try again.")
      result = lengthChecker();
    }
    return result;
  }
 
  // Asks user to if the would like various character types included
  // Checks that at least one character type is selected 
  function typeChecker() {
    useNumber = confirm("Would you like to include numbers?");
    uselower = confirm("Would you like to include lowercase letters?");
    useUpper = confirm("Would you like to include uppercase letters?");
    useSpecial = confirm("Would you like to include special characters?");
    if(!useNumber && !uselower && !useUpper && !useSpecial) {
      alert("At least one character type needs to be included. Please try again.")
      typeChecker();
    }
  }
  
  passLength = lengthChecker();
  typeChecker();

  // Checks for each type of character that has been selected
  // Adds the array of that character type to an array of the selected types
  let typesKeyValue = [useNumber, numbers, uselower, lowerLetters, useUpper, upperLetters, useSpecial, specialChar];
  let selectedTypes = [];
  for(let i = 0; i < typesKeyValue.length; i += 2) {
    if(typesKeyValue[i]) {
      selectedTypes.push(typesKeyValue[i + 1]);
    }
  }
  
  // Loops for the length of the desired password less the number of types selected
  // Selects a random type and random character from that type
  // Adds character to end of password
  for(let i = 0; i < passLength - selectedTypes.length; i++) {
    let type = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
    let character = type[Math.floor(Math.random() * type.length)]
    password += character;
  }

  // Loops over The selected types
  // Adds one random character of each type selected to the password 
  selectedTypes.forEach(element => {
    let character = element[Math.floor(Math.random() * element.length)];
    password += character;
  });

  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pass = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
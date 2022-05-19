// Arrays of possible password characters
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialChar = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','\`','{','|','}','~'];

// Checks that a valid length has been input
function lengthChecker() {
  let result = prompt("How many characters do you want in the password?\nThe password must be at least 8 characters and no mre than 128");
  result = parseInt(result);
  if(result < 8 || result > 128 || isNaN(result)) {
    alert("An invalid length has been submitted")
    result = lengthChecker();
  }
  return result;
}

let passLength = lengthChecker();

let useNumber;
let uselower;
let useUpper;
let useSpecial;

// Checks that at least one character type is selected 
function typeChecker() {
  useNumber = confirm("Would you like to include numbers?");
  uselower = confirm("Would you like to include lowercase letters?");
  useUpper = confirm("Would you like to include uppercase letters?");
  useSpecial = confirm("Would you like to include special characters?");
  
  if(!useNumber && !uselower && !useUpper && !useSpecial) {
    alert("At least one character type needs to be included")
    typeChecker();
  }
}

typeChecker();

// Checks for each type of character that has been selected
// Adds the array of that character type to an array of the selected types
let selectedTypes = [];
if(useNumber) {
  selectedTypes.push(numbers);
}
if(uselower) {
  selectedTypes.push(lowerLetters);
}
if(useUpper) {
  selectedTypes.push(upperLetters);
}
if(useSpecial) {
  selectedTypes.push(specialChar);
}

let password = '';

// Loops for the length of the desired password less the number of types selected
// Selects a random type and random character from that type
// Adds character to end of password
for(let i = 0; i < passLength - selectedTypes.length; i++) {
  let type = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
  let character = type[Math.floor(Math.random() * type.length)]
  password = password + character;
}

// Loops over The selected types
// Adds one random character of each type to the password 
selectedTypes.forEach(element => {
  let character = element[Math.floor(Math.random() * element.length)];
  password = password + character;
});

console.log(password);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

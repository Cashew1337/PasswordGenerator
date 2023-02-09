// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()";
var numbers = "0123456789";

var lowerUpper = lowerCase.concat(upperCase);
var lowerSpecial = lowerCase.concat(specialChar);
var lowerNumbers = lowerCase.concat(numbers);
var upperSpecial = upperCase.concat(specialChar);
var upperNumbers = upperCase.concat(numbers)
var lowerThree = lowerCase.concat(specialChar, numbers);
var specialNumbers = specialChar.concat(numbers);
var upperThree = upperCase.concat(specialChar, numbers)
var allCharacters = lowerCase.concat(upperCase, specialChar, numbers);

function generatePassword() {
  var passPrompt = Number(prompt("Password Lenght: 8 - 128"));
  var charTypeSpecial = confirm("Would you like to include special characters?");
  var charTypeNumeric = confirm("Would you like to include numbers?");
  var charTypeUpper = confirm("Would you like to include uppercase letters?");
  var charTypeLower = confirm("Would you like to include lowercase letters?");
  
  var charSet = " ";
  if (charTypeSpecial && !charTypeNumeric && !charTypeUpper && !charTypeLower) {
    charSet = specialChar;
  } else if (!charTypeSpecial && charTypeNumeric && !charTypeUpper && !charTypeLower) {
    charSet = numbers;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

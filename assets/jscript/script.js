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
  if (!passPrompt) {
    alert("Please select a password length.");
    generatePassword();
  }
  var charTypeSpecial = confirm("Would you like to include special characters?");
  var charTypeNumeric = confirm("Would you like to include numbers?");
  var charTypeUpper = confirm("Would you like to include uppercase letters?");
  var charTypeLower = confirm("Would you like to include lowercase letters?");
  
  var charSet = " ";
  if (!charTypeSpecial && !charTypeNumeric && !charTypeUpper && !charTypeLower){
    alert("Please select at least one criteria to generate a password.");
    generatePassword();
  } else if (charTypeSpecial && !charTypeNumeric && !charTypeUpper && !charTypeLower) {
    charSet = specialChar;
  } else if (!charTypeSpecial && charTypeNumeric && !charTypeUpper && !charTypeLower) {
    charSet = numbers;
  } else if (!charTypeSpecial && !charTypeNumeric && !charTypeUpper && charTypeLower) {
    charSet = lowerCase;
  } else if (!charTypeSpecial && !charTypeNumeric && charTypeUpper && !charTypeLower) {
    charSet = upperCase;
  } else if (charTypeSpecial && charTypeNumeric && !charTypeUpper && !charTypeLower) {
    charSet = specialNumbers;
  } else if (charTypeSpecial && !charTypeNumeric && charTypeUpper && !charTypeLower) {
    charSet = upperSpecial;
  } else if (charTypeSpecial && !charTypeNumeric && !charTypeUpper && charTypeLower) {
    charSet = lowerSpecial;
  } else if (charTypeSpecial && charTypeNumeric && charTypeUpper && !charTypeLower) {
    charSet = upperThree;
  } else if (charTypeSpecial && charTypeNumeric && !charTypeUpper && charTypeLower) {
    charSet = lowerThree;
  } else {
    charSet = allCharacters;
  }
  var charArray = charSet.split("");
  var retPass = " ";
  for(i = 0; i < 0; i++){
    retPass = charArray.length(Math.floor(Math.random() * passPrompt));
   return retPass;
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

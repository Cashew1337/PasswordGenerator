// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables containing potential password characters.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()";
var numbers = "0123456789";
// Variables for possible combinations of potential password characters.
var lowerUpper = lowerCase.concat(upperCase);
var lowerSpecial = lowerCase.concat(specialChar);
var lowerNumbers = lowerCase.concat(numbers);
var upperSpecial = upperCase.concat(specialChar);
var upperNumbers = upperCase.concat(numbers)
var lowerThree = lowerCase.concat(specialChar, numbers);
var specialNumbers = specialChar.concat(numbers);
var upperThree = upperCase.concat(specialChar, numbers);
var noSpecial = lowerCase.concat(numbers, upperCase);
var allCharacters = lowerCase.concat(upperCase, specialChar, numbers);
// Function to generate the password, called when pressing the "Generate Password" button.
function generatePassword() {
  // Prompts and confirms used to generate the criteria for the password.
  var passPrompt = Number(prompt("Password Lenght: 8 - 128"));
  if (!passPrompt) {
    alert("Please select a password length.");
    generatePassword();
  }
  var charTypeSpecial = confirm("Would you like to include special characters?");
  var charTypeNumeric = confirm("Would you like to include numbers?");
  var charTypeUpper = confirm("Would you like to include uppercase letters?");
  var charTypeLower = confirm("Would you like to include lowercase letters?");
  
  // If statement to help the function determine what character set to use based on user input in the above prompts.
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
  } else if (charTypeSpecial && charTypeNumeric && !charTypeUpper && !charTypeLower){
    charSet = specialNumbers;
  } else if (charTypeSpecial && !charTypeNumeric && charTypeUpper && !charTypeLower){
    charSet = upperSpecial;
  } else if (charTypeSpecial && !charTypeNumeric && !charTypeUpper && charTypeLower){
    charSet = lowerSpecial;
  } else if (charTypeSpecial && charTypeNumeric && charTypeUpper && !charTypeLower) {
    charSet = upperThree;
  } else if (charTypeSpecial && charTypeNumeric && !charTypeUpper && charTypeLower) {
    charSet = lowerThree;
  } else if (!charTypeSpecial && charTypeNumeric && charTypeUpper && charTypeLower) {
    charSet = noSpecial;
  } else {
    charSet = allCharacters;
  }
  // Code to create an array from the password critera chosen above.
  var charArray = charSet.split("");
  console.log(charSet);
  console.log(charArray);
  console.log(passPrompt.length)
  var retPass = " ";
  // Equation to pull random characters from the above array and finish generating the password. Initial equation was similar to the one located at the link in the README labeled Equation. However, after going over the code with Gerson and Eric, my instructor and TA, I was able to edit it and the result is the current equation.
  for(var i = 0; i < passPrompt; i++){
    var randomNum = Math.floor(Math.random() * charArray.length);
    console.log(randomNum)
    retPass += charArray[randomNum];
  }
  console.log(retPass);
  return retPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log({password});
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

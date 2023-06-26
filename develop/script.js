// Global Variables
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword(password));

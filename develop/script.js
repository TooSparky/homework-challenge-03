// Global Variable
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Local scope variables
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specialCharacters = '!@#$%^&*()/><?,.[]{}=+-_';

  var upperCaseResponse = '';
  var lowerCaseResponse = '';
  var numbersResponse = '';
  var specialCharactersResponse = '';

  var charPool = '';
  var outPassword = '';

  // PasswordLength prompt
  var passwordLength = parseInt(window.prompt('Please enter the length you would like the password to be (8-128 characters)'));
  if (passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a valid password length');
      return;
  }
  else {
      confirm('Your password will be ' + passwordLength + ' characters long');
  }

  console.log(charPool);
  // UpperCase prompt
  upperCaseResponse = window.prompt('Would you like to include uppercase letters? Y / N');
  if (upperCaseResponse === 'y' || upperCaseResponse === 'Y') {
      charPool += upperCase;
  }
  else {
      confirm('You will not have uppercase letters in your password');
  }

  console.log(charPool);
  // LowerCase prompt
  lowerCaseResponse = window.prompt('Would you like to include lowercase letters? Y / N');
  if (lowerCaseResponse === 'y' || lowerCaseResponse === 'Y') {
      charPool += lowerCase;
  }
  else {
      confirm('You will not have lowercase letters in your password');
  }

  console.log(charPool);
  // Numbers prompt
  numbersResponse = window.prompt('Would you like to include numbers? Y / N');
  if (numbersResponse === 'y' || numbersResponse === 'Y') {
      charPool += numbers;
  }
  else {
      confirm('You will not have numbers in your password');
  }

  console.log(charPool);
  // Special characters prompt
  specialCharactersResponse = window.prompt('Would you like to include special characters? Y / N');
  if (specialCharactersResponse === 'y' || specialCharactersResponse === 'Y') {
      charPool += specialCharacters;
  }
  else {
      confirm('You will not have special characters in your password');
  }
  console.log(charPool);

  // Generate the password
  while (outPassword.length < passwordLength) {
      outPassword += charPool[Math.floor(Math.random() * charPool.length - 1)];
  }

  // Output the newly made password
  return outPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

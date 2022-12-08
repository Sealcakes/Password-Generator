// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password

function generatePassword () {
  // Prompts to determine password criteria
  var passwordLength = window.prompt("How long do you need the password to be? 8-128 Characters.");
  var useLowercase = window.confirm("Would you like lowercase characters in your password?");
  var useUppercase = window.confirm("Would you like uppercase characters in your password?");
  var useNumbers = window.confirm("Would you like numbers in your password?");
  var useSpecialChars = window.confirm("Would you like special characters in your password?");

  // Arrays to pull password characters from
  const lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const specialChars = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

  for (x = 0; x < passwordLength; x++) {
    
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

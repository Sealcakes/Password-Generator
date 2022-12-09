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

  // Array that holds password characters
  var passwordList = [];

  // Function to generate random character from character arrays
  function randomChar (list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  var selectors = 0;

  if (useLowercase) {
    selectors += 1;
  }

  if (useUppercase) {
    selectors += 1;
  }

  if (useNumbers) {
    selectors += 1;
  }

  if (useSpecialChars) {
    selectors += 1;
  }

  for (x = 0; x < (passwordLength / selectors); x++) {
    if (useLowercase) {
      passwordList.push(randomChar(lowercaseChars));
    }
    if (useUppercase) {
      passwordList.push(randomChar(uppercaseChars));
    }
    if (useNumbers) {
      passwordList.push(randomChar(numbers));
    }
    if (useSpecialChars) {
      passwordList.push(randomChar(specialChars));
    } 
  }
  
  

  return passwordList.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

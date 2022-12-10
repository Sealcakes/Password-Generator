// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password

function generatePassword () {
  
  // Arrays to pull password characters from
  const lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
  
  
  // Prompts to determine password criteria
  var passwordLength = window.prompt("How long do you need the password to be? 8-128 Characters.");
  
  // If user cancels the password length prompt, it closes the window
  if (!passwordLength) {
    return;
  }

  // if statement to verify number of characters in password length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a length between 8 and 128 characters");
    generatePassword();
  }

  // Checks to see if any spaces were input
  for (x = 0; x < passwordLength.length; x++) {
    if (passwordLength.charAt(x) === " ") {
      alert("Please enter numbers only")
      generatePassword();
    }
  }

  // Changes passwordLength variable from a string to number
  passwordLength = parseInt(passwordLength);

  // Checks to see if input is numbers only
  if (isNaN(passwordLength)) {
    alert("Please enter numbers only");
    generatePassword();
  } else {
    var useLowercase = window.confirm("Would you like lowercase characters in your password?");
    var useUppercase = window.confirm("Would you like uppercase characters in your password?");
    var useNumbers = window.confirm("Would you like numbers in your password?");
    var useSpecialChars = window.confirm("Would you like special characters in your password?");
  }

  // Validate that password requirements are selected
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
    alert("No password requirements selected");
    return;
  }

  // Array that holds password characters
  var passwordList = [];

  // Function to generate random character from character arrays
  function randomChar (list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  

  // Selectors represent how many of the options have been chosen
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
  /* This for loop takes the requested password length and divides it by the number of selectors
  chosen, it then generates one character from each catagory during one loop*/
  for (x = 0; x < (Math.floor(passwordLength / selectors)); x++) {
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
  // If the number chosen for the password length is not evenly divisible by the number of selectors
  // chosen, then this If/For loop will determine if additional characters need to be added.
  if (passwordList.length < passwordLength) {
    var charDiff = (passwordLength - passwordList.length)
    
    for (x = 0; x < charDiff; x++) {
      if (useLowercase) {
        passwordList.push(randomChar(lowercaseChars));
      } else if (useUppercase) {
        passwordList.push(randomChar(uppercaseChars));
      } else if (useNumbers) {
        passwordList.push(randomChar(numbers));
      } else {
        passwordList.push(randomChar(specialChars));
      }
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

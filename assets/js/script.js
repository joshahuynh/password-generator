// possible character choices
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var passwordGenerated = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
var generatePassword = function() {

    // ask user for the length of password
    var numCharacters = parseInt(window.prompt("Choose a password length between 8 and 128 characters"));

    // check if the length of the password is at least 8 characters
    if (numCharacters < 8) {
      window.alert("Your password must be at least 8 characters");
      generatePassword();
    }
  
    // check if the length of the password is no more than 128 characters
    else if (numCharacters > 128) {
      window.alert("Your password must be no more than 128 characters");
      generatePassword();
    }

    // when the password is between 8 to 128 characters
    else if (numCharacters >= 8 && numCharacters <=128) {
      var charSpecial = window.confirm("Would you like to include special characters");
      var charNumeric = window.confirm("Would you like to include numeric values");
      var charUpperCase = window.confirm("Would you like to include upprcase characters");
      var charLowerCase = window.confirm("Would you like to include lowercase characters");
      
      // all possibile combinations
      var combinedArray = [];

      if (charSpecial) {
        combinedArray = combinedArray.concat(specialCharacters);
      }

      if (charNumeric) {
        combinedArray = combinedArray.concat(numbers);
      }

      if (charUpperCase) {
        combinedArray = combinedArray.concat(upperCase);
      }
      
      if (charLowerCase) {
        combinedArray = combinedArray.concat(lowerCase);
      }

      if (!charSpecial && !charNumeric && !charLowerCase && !charUpperCase) {
        alert("Select at least one password criteria");
       writePassword();
       return;
      }

     ;
      for (var i = 0; i < numCharacters; i++) {
        passwordGenerated = passwordGenerated + combinedArray[Math.floor(Math.random() * combinedArray.length)];
      }

    return passwordGenerated; 
    }

    else {
      alert("Please enter a valid number");
      writePassword();
      return;
    }
};

// write password to the #password input
function writePassword() {
passwordGenerated = "";
    
generatePassword();
    var password = passwordGenerated;
    if (!password) {
        return;
    }
    
    var passwordText = document.querySelector("#password");
      
    passwordText.value = password;
}
    
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
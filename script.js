// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(_uppercase, _lowercase, _number, _symbol, _length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
 var length = +_length.value;
 var activeLower = _lowercase.checked;
 var activeUpper = _uppercase.checked;
 var activeNumber = _number.checked;
 var activeSymbol = _symbol.checked; 

 generatePassword(activeLower, activeNumber, activeUpper, activeSymbol, length); 

};

// Assignment code here


// Get references to the #generate element // variable set up for the id=generate - this variable is for the below event listener  
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); // this is missing - this is a variable named password and its value is equal to the generatepassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //this line displays it on to the screen

}

// Add event listener to generate button // when the user clicks the generate button, it will call the writepassword function above
generateBtn.addEventListener("click", writePassword);




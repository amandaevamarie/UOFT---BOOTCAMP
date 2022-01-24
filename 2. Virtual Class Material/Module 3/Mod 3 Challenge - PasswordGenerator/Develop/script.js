// Assignment code here

// Prompt for password length - which must be between 8-128 character - ensure there is a prompt there if they put over or less than range and are prompted again if they don't put in the correct parameters - store the user input
// 1. how many? if they put correct move to next part if they put incorrect go to the correction
// 2. correction to put in correct amount

// variables for generated password
var uppercase = promptUpper

//Prompt for number of characters
var passwordLength = window.prompt("How many characters would you like your password to be?")

if (passwordLength < 8 || passwordLength > 128){
    window.alert("Length must be 8-128 characters")
}

//UPPERCASE
// Prompt for uppercase 
var promptUpper = window.prompt ("Would you like to include uppercase letters? YES or NO.")

console.log(promptUpper)
  //if they choose yes
  if (promptUpper === "yes" || promptUpper === "YES") {
    uppercase = true;
  } else if (promptUpper === "no" || promptUpper === "NO") {
    uppercase = true;
  }

  console.log(uppercase);




// Prompt for lowercase

// Prompt for numbers

// Prompt for special characters

// definitions for variables for generated password = uppercase = (enter data)

// validate the input - must be between 8-128 and have at least one special character

// generatePassword will be var uppercase = get lower random?
// Link to generate button

// Create a loop?


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



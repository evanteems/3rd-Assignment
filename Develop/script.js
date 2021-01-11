// Assignment code here
// Declaring all of my global values to use further down the page. Didn't give them values, as the values would eventually be changed.
let lengthPrompt = 0; ///gave length prompt a default value of 0

let lowerCasePrompt; 

let upperCasePrompt;

let numericPrompt;

let specialCharacterPrompt;

let lengthValue = lengthPrompt;

let lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let specialCharacterValues = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ".", "/", "?", ";", ":"];

let userChoicesPWArray = [];

let updatedArray;


///Assigned two values to the specific ID's within the HTML.
let generateBtn = document.querySelector("#generate"); 
let passwordText = document.querySelector("#password");

//// this is the function where the randomization occurs based on the prompts selected as well as the lenght amount
let generateUpdatedArray = function (updatedArray) {
  let password = "";
  let updatedString = updatedArray.join('');
  console.log(updatedString);

  for (let i = 0; i < lengthValue; i++) {
    password = password + updatedString.charAt(Math.floor(Math.random() * Math.floor(updatedString.length - 1)));
  }
  return password;
}
///// this function takes all the prompts answered and pushes/concats all the "selected values" into one array
//// not most robust way to do this though, for sure.
let generatePassword = function (array) {

  if (lowerCasePrompt && upperCasePrompt && numericPrompt && specialCharacterPrompt) { /// all values
    updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, numericValues, specialCharacterValues);

////This happens when none of the prompts are answered.
   } else if (!lowerCasePrompt && !upperCasePrompt && !numericPrompt && !specialCharacterPrompt) { 
      window.alert('Please say YES or OK to at least one of the prompts.');
      updatedArray = [];

  } else if (lowerCasePrompt && upperCasePrompt && numericPrompt) { ////lower upper and numbers
   updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, numericValues );

 } else if (lowerCasePrompt && upperCasePrompt && specialCharacterPrompt) { ///lower upper and special 
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, specialCharacterValues);

  } else if (lowerCasePrompt && numericPrompt && specialCharacterPrompt) {
   updatedArray = userChoicesPWArray.concat(lowerCaseValues, numericValues, specialCharacterValues);

  } else if (upperCasePrompt && numericPrompt && specialCharacterPrompt) {
   updatedArray = userChoicesPWArray.concat(upperCaseValues, numericValues, specialCharacterValues);

 } else if (lowerCasePrompt && upperCasePrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues);
 } else if (lowerCasePrompt && numericPrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, numericValues);
 } else if (lowerCasePrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, specialCharacterValues);
 } else if (upperCasePrompt && numericPrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues, numericValues);
 } else if (upperCasePrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues, specialCharacterValues);
 } else if (numericPrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(numericValues, specialCharacterValues);
 } else if (lowerCasePrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues);
 } else if (upperCasePrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues);
 } else if (numericPrompt) {
  updatedArray = userChoicesPWArray.concat(numericValues);
 } else if (specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(specialCharacterValues);
 } 
 ////This is where the actual password text content is set, by calling updatedArray within the generateUpdatedArray function
 passwordText.textContent = generateUpdatedArray(updatedArray);
}

////Event Listener for the generateBtn variable (aka when you select generate password button on the UI)
generateBtn.addEventListener("click", function () {// attach the event listener once the password is generated. 

  lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.');

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    lengthValue = +lengthPrompt; ///lenghtPrompt is now a number instead of a string.

    lowerCasePrompt = window.confirm('Would you like lower case letters to be included? Select OK for YES or Cancel for NO.');

    upperCasePrompt = window.confirm('Would you like upper case letters to be included in your password? Select OK for YES or Cancel for NO.');

    numericPrompt = window.confirm('Would you like any numbers to be included in your password? Select OK for YES or Cancel for NO.');

    specialCharacterPrompt = window.confirm('Would you like any special characters to be included in your password? Select OK for YES or Cancel for NO.');

    window.alert('Generating Password now.')

    generatePassword(updatedArray) ////This is where I call the generate Password function at the end of the window prompts within the event listener.

    ///Edge cases when the first prompt (lengthPrompt) receives an "invald value."
  } else if (lengthPrompt <= 7) {
    window.alert('Password length is too short. Please try again.');
  } else if (lengthPrompt >= 129) {
    window.alert('Password length is too long. Please try again.');
  } else if (typeof lengthPrompt === 'string' || typeof lengthPrompt === 'boolean') {
    window.alert('Please enter a number.');
  } else {
    window.alert('Please enter a number.');
  }

}
);
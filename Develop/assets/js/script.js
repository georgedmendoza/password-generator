// Assignment code here
var hello = alert("Please answer the next conditions to see what you would like your password to include");
//variable for user to select length of password
var c2 = prompt("How long would you like to your password to be. Chose range 8-128");
//variable for characteristics selected by user
var c1 = prompt("Would you like 1=lowercase, 2=uppercase, 3=numeric, and/or 4=special characters. Enter 1,2,3,and/or,4");
//characteristic conditions
var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];


generatePassword = function() {
  if(c2<<
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("hello")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

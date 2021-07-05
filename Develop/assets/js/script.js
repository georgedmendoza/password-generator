// Assignment code here
var hello = alert("Please answer the next conditions to see what you would like your password to include");
//characteristic conditions
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
// [0,1,2,3,4,5,6,7,8,9]
//user chosen characteristics
var userChar = [];

generatePassword = function() {
  //variable for user to select length of password
  var c1 = prompt("How long would you like to your password to be. Chose range 8-128");
  //variables for characteristics selected by user
  var lower = confirm("Would you like 1=lowercase Enter 1.");
  var upper = confirm("Would you like 2=uppercase? Enter 2.");
  var numeric = confirm("Would you like 3=numeric? Enter 3.");
  var special = confirm("Would you like special characters? Enter 4.");
  if(c1<8 || c1>128){
    alert("You must enter a correct value");
    return generatePassword();
  }

  if(lower===false && upper===false && numeric===false && special===false){
    alert("You must select a characteristic");
    return generatePassword();
  }
 
  //all four coditions chosen
  if (lower===true && upper===true && numeric===true && special===true){
    userChar = userChar.concat(lowerChar, upperChar, numeric, specialChar)
    console.log(userChar);
  }
  //three conditions chosen. Different combination possibilites
  else if(lower===true && upper===true && numeric===true){
    userChar = userChar.concat(lowerChar, upperChar, numeric)
    console.log(userChar);
  }
  else if(lower===true && upper===true && special===true){
    userChar = userChar.concat(lowerChar,upperChar,specialChar)
    console.log(userChar);
  }
  else if(lower===true && numeric===true && special===true){
    userChar = userChar.concat(lowerChar,numeric,specialChar)
    console.log(userChar);
  }
  else if(upper===true && numeric===true && special===true){
    userChar = userChar.concat(upperChar,numeric,specialChar)
    console.log(userChar);
  }
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
writePassword();
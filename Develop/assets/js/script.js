// Assignment code here
var hello = alert("Please answer the next conditions to see what you would like your password to include");
//characteristic conditions
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
// [0,1,2,3,4,5,6,7,8,9]
//user chosen characteristics
var userChar = [];

generatePassword = function() {
  //variable for user to select length of password
  var passLength = prompt("How long would you like to your password to be. Chose range 8-128");

  if(passLength<8 || passLength>128){
    alert("You must enter a correct value");
    return generatePassword();
  }
  while(passLength==="" || passLength === null) {
      alert("You must enter a correct value");
      return generatePassword();
  }
  //converting passLength str to int
  passLength = parseInt(passLength);
  console.log(passLength);
  console.log(typeof passLength);
 
  //variables for characteristics selected by user
  var lower = confirm("Would you like 1=lowercase Enter 1.");
  var upper = confirm("Would you like 2=uppercase? Enter 2.");
  var numeric = confirm("Would you like 3=numeric? Enter 3.");
  var special = confirm("Would you like special characters? Enter 4.");
  
 
  //all four coditions chosen
  if (lower===true && upper===true && numeric===true && special===true){
    userChar = userChar.concat(lowerChar, upperChar, numericChar, specialChar)
    console.log(userChar);
  }
  //three conditions chosen. Different combination possibilites (4)
  else if(lower===true && upper===true && numeric===true){
    userChar = userChar.concat(lowerChar, upperChar, numericChar)
    console.log(userChar);
  }else if(lower===true && upper===true && special===true){
    userChar = userChar.concat(lowerChar,upperChar,specialChar)
    console.log(userChar);
  }else if(lower===true && numeric===true && special===true){
    userChar = userChar.concat(lowerChar,numericChar,specialChar)
    console.log(userChar);
  }else if(upper===true && numeric===true && special===true){
    userChar = userChar.concat(upperChar,numericChar,specialChar)
    console.log(userChar);
  }
  //two conditions chosen. Different combination possibilities (6)
  else if (lower===true && upper===true){
    userChar = userChar.concat(lowerChar, upperChar)
    console.log(userChar);
  }else if(lower===true && numeric===true){
    userChar = userChar.concat(lowerChar, numericChar)
    console.log(userChar);
  }else if(lower===true && special===true){
    userChar = userChar.concat(lowerChar,specialChar)
    console.log(userChar);
  }else if(upper===true && numeric===true){
    userChar = userChar.concat(upperChar,numericChar)
    console.log(userChar);
  }else if(upper===true && special){
    userChar = userChar.concat(upperChar,specialChar)
    console.log(userChar);
  }else if( numeric===true && special===true){
    userChar = userChar.concat(numericChar,specialChar)
    console.log(userChar);
  }
  //one condition chosen. Different combination possibilities (4)
  else if(lower===true){
    userChar = userChar.concat(lowerChar)
    console.log(userChar);
  }else if(upper===true){
    userChar = userChar.concat(upperChar)
    console.log(userChar);
  }else if(numeric===true){
    userChar = userChar.concat(numericChar)
    console.log(userChar);
  }else if(special===true){
    userChar = userChar.concat(specialChar)
    console.log(userChar);
  }
  else{
    alert("You must select a characteristic");
    return generatePassword();
  }

  for(var i=0; i<passLength; i++){
    examplePassword = Math.floor(Math.random() * passLength);
    console.log(examplePassword);
  }
  // var newLength = Math.floor(Math.random() * passLength)
  // console.log(newLength);

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
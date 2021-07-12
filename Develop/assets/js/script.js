// Assignment code here
var hello = alert("Please answer the next conditions to see what you would like your password to include");
//characteristic conditions

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];

//global variables 
var userChar = "";
var array1 = "";
var passLength;

generatePassword = function() {
  //variable for user to select length of password
  var passLength = prompt("How long would you like to your password to be. Chose range 8-128");

  //every function is called set arra1 and useChar back to empty
  array1 = "";
  userChar = [];
  //validate length of password
  if(passLength<8 || passLength>128){
    alert("You must enter a correct value");
    return generatePassword();
  }
  //check for empty of null values for length
  while(passLength==="" || passLength === null) {
      alert("You must enter a correct value");
      return generatePassword();
  }
  //converting passLength str to int
  passLength = parseInt(passLength)
  console.log(passLength);
  console.log(typeof passLength);
 
  //variables for characteristics selected by user
  var lower = confirm("Would you like lowercase characters?");
  var upper = confirm("Would you like uppercase characters?");
  var numeric = confirm("Would you like numeric characters?");
  var special = confirm("Would you like special characters?");
  
  //adding conditions to userChar based on what user selects
  if (upper) {
    userChar = userChar.concat(upperChar)
  };
  if(lower){ 
    userChar= userChar.concat(lowerChar)
  };
  if (numeric) {
    userChar = userChar.concat(numericChar)
  };
  if (special) {
    userChar = userChar.concat(specialChar)
  };
  if (!upper && !lower && !numeric && !special) {
    alert("You must select at least one characteristic!")
    return generatePassword();
  };
        /*THIS CODE WORKS, BUT I REFACTORED IT 
            if (lower===true && upper===true && numeric===true && special===true){
              userChar = userChar.concat(lowerChar, upperChar, numericChar, specialChar)
              entireLength = userChar.length
            }
            //three conditions chosen. Different combination possibilites (4)
            else if(lower===true && upper===true && numeric===true){
              userChar = userChar.concat(lowerChar, upperChar, numericChar);
            }else if(lower===true && upper===true && special===true){
              userChar = userChar.concat(lowerChar,upperChar,specialChar);
            }else if(lower===true && numeric===true && special===true){
              userChar = userChar.concat(lowerChar,numericChar,specialChar);
            }else if(upper===true && numeric===true && special===true){
              userChar = userChar.concat(upperChar,numericChar,specialChar);
            }
            //two conditions chosen. Different combination possibilities (6)
            else if (lower===true && upper===true){
              userChar = userChar.concat(lowerChar, upperChar);
            }else if(lower===true && numeric===true){
              userChar = userChar.concat(lowerChar, numericChar);
            }else if(lower===true && special===true){
              userChar = userChar.concat(lowerChar,specialChar);
            }else if(upper===true && numeric===true){
              userChar = userChar.concat(upperChar,numericChar);
            }else if(upper===true && special){
              userChar = userChar.concat(upperChar,specialChar);
            }else if( numeric===true && special===true){
              userChar = userChar.concat(numericChar,specialChar);
            }
            //one condition chosen. Different combination possibilities (4)
            else if(lower===true){
              userChar = userChar.concat(lowerChar);
            }else if(upper===true){
              userChar = userChar.concat(upperChar);
            }else if(numeric===true){
              userChar = userChar.concat(numericChar);
            }else if(special===true){
              userChar = userChar.concat(specialChar);
            }
            else{
              alert("You must select a characteristic");
              return generatePassword();
            }
        */
    
  function randomSelect() {
    for(var i=0; i<passLength; i++){
      var randomNum = Math.floor(Math.random() * userChar.length);
      var examplePassword = userChar[randomNum];

      array1+=examplePassword;
    }
    console.log(array1);
    console.log(array1.length)
    return array1;
  }
   //run function to see output
   return randomSelect();
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var password =  randomSelect() ;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();
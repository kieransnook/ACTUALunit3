

//Variables defined
var generateBtn = document.querySelector("#generate");

var passlength = 0;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var userPassword = "";
var passwordGroup = "";

//request password length
var passlength = parseInt(prompt("Enter length of password.",""));

//number required
while (isNaN(passlength)) {
var plassength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128.",""));
} 
while (passlength < 8 || passlength > 128){
var passlength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));
}

// confirm Lower,upper,number,special
var selectLower = confirm("Would you like to use lower case letters?");
var selectUpper = confirm("Would you like to use upper case letters?");
var selectNumber = confirm("Would you like to use numbers?");
var selectSpecial = confirm("Would you like to user special characters?");

// Password function
generatePassword()

function generatePassword() {
    userPassword = "";
    if (selectLower) {
    passwordGroup += lowerCase;
    }
    if (selectUpper) {
    passwordGroup += upperCase;
    }
    if (selectNumber) {
    passwordGroup += numbers;
    }
    if (selectSpecial) {
    passwordGroup += specialCharacter;
    }
    //loop for password
    for (let i = 0; i < passlength; i++) {
    userPassword += passwordGroup.charAt(
    Math.floor(Math.random() * passwordGroup.length)
      );
    }
    return userPassword;

   
  

}

function DisplayNewPassword() {
  generatePassword();
  document.getElementById("password").innerHTML = "";
  document.getElementById("password").innerHTML = userPassword;

}

document.getElementById("generate").addEventListener("click", DisplayNewPassword)


document.getElementById("password").innerHTML = userPassword;

  

  
  

  



// Add event listener to generate button
//prompt user for pass length
// check to see if the user actually entered a length
// 4 confirms
// 1) special characters
// 2) numbers
// 3)lowercase
// 4) uppercase
// generate password based on user specifications
// note: user specs come from confirm


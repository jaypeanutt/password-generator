// Assignment code here
function generatePassword(){
  var length = window.prompt("choose password length between 8 and 128")
  char = "abcdefghijklmnopqrstuvwkyz";
  num = "1234567890";
  symbols = "!@#$%^&*()_+-=";
  passwordText = [""];
   for(i=0;i < length; i++){
     passwordText += char.charAt(Math.floor(Math.random() * char.length))
     passwordText += num.charAt(Math.floor(Math.random() * num.length))
     passwordText += sym.charAt(Math.floor(Math.random() * sym.length))
    
   } 
  return passwordText

  };

  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

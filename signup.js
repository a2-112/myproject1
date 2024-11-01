function verifyPsw(){
// creating a function named 

let psw= document.getElementById("psw").value;
// first psw input in html

/* creating a variable for the id name "psw" to store a value the name must be 
link to the one stated in your html if any*/

let cnpsw = document.getElementById("cnpsw").value;
// second password in 

let userName = document.getElementById("username").value;

console.log(psw, cnpsw, userName);
//console help to test the code to know if it is working
let form = document.getElementsByClassName("input")

let message= document.getElementById("message");

  //== means the username must be have a content

if (userName == 0){
  message.textContent = "Username required"
  message.style.color = "red"
  return false;
}else{
  message.textContent = "Username saved"
  message.style.color = "darkblue"
  authorised = true
}

  //== means the password must be equals to 8 

 //minimum password length validation
if(psw.length == 8){
  //nested if and else here the two password must be complete and the same
   if(psw == cnpsw){
  message.textContent ="Passwords match";
  message.style.color =" darkblue";
 }
 else{
  message.textContent ="Passwords don't match";
  message.style.color =" red";
  window.location.href ="Dribble.html"
 }
}
else{
  message.textContent ="Password must contain 8+ characters";
   message.style.color ="red";
}
}



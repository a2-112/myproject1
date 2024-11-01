function verifyPsw(){
// creating a function named 

let myInput= document.getElementById("psw").value;
// creating a variable for the id name "psw" to store a value

  //check empty password field
if(myInput == ""){
      document.getElementById("message").innerHTML="**Fill the password please!";
      return false;
      
// minimum password length validation
}
if(myInput.length <= 6){
   document.getElementById("message").innerHTML="**Password length must be atleast 8 characters"; 
}else{
   authorised = true;
   window.location.href("signin.html")
}
}
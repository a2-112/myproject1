/* Set the width of the sidebar to 250px and the right margin of the page content to 250px */
//openNav is a fuction for the button tag

  function openNav() {
  document.getElementById("mySidebar").style.width = "230px";
    //mySidebar is the id name for the ul tag
  /*style is a css property used to change the width and margin of the property in js, in css 
  the ul width is 0 so this is used to change it */
  document.getElementById("bar").style.marginRight = "250px";
    //id name of the div bearing the button tag
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
//function name of the a href js in html
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("bar").style.marginRight = "0";
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("dropdown-menu").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("dropdown-menu").style.visibility = "hidden";
  }, 3000);
}

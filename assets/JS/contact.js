//Navbar
let navStatus = "closed";
const navBackground = document.querySelector(".navBackground");
const navCard = document.querySelector(".navCard");
const navButton = document.querySelector(".navButton");

  function toggleNavbar(){
    if (navStatus === "closed"){
      navBackground.style.width = "100%";
      navBackground.style.height = "100vh";

      navCard.style.width = "clamp(300px, 30vw, 1000px)";

      navButton.style.left = "calc(clamp(320px, 30vw, 1000px) + 20px)";

      navStatus = "opened";
    } else{
      navBackground.style.width = "0%";
      navBackground.style.height = "0vh";

      navCard.style.width = "0vw";

      navButton.style.left = "20px";

      navStatus = "closed";

     }
  }

navButton.onmouseup = function() {toggleNavbar()};
navBackground.onmouseup = function() {toggleNavbar()};

//Navbar End










//Footer
const insta = document.getElementsByClassName("footerSM")[0];
const facebook = document.getElementsByClassName("footerSM")[1];
const vsco = document.getElementsByClassName("footerSM")[2];
//Footer End


















//Global Functions
const cursorPage = document.getElementById("cursor");

function changeCursor(cursor){
  cursorPage.style.display = "block";
if(cursor === insta) {
  cursorPage.style.backgroundImage = "url(/assets/images/instagram.svg)";
} else if(cursor === facebook) {
  cursorPage.style.backgroundImage = "url(/assets/images/facebook.svg)";
} else if(cursor === vsco) {
  cursorPage.style.backgroundImage = "url(/assets/images/vsco.svg)";
} else if (cursor === "none") {
  cursorPage.style.backgroundImage = "none";
  cursorPage.style.display = "none";
}

}

function moveCursor(e) {
  cursorPage.style.left = e.pageX + 10 + "px";
  cursorPage.style.top = e.pageY + 10 + "px";
}


//Global Functions End




//Event Listeners


window.addEventListener("mousemove", function(event) {

  moveCursor(event);

  if(insta.matches(":hover")){
    changeCursor(insta);
  } else if(facebook.matches(":hover")){
    changeCursor(facebook);
  } else if(vsco.matches(":hover")){
    changeCursor(vsco);
  } else{
    changeCursor("none");
  }
}, false)


//Event Listeners End
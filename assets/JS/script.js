//Hero 

const hero = {
  heroSections: document.querySelector(".heroBackground"),
  child1: document.querySelector(".heroBackground .child:nth-child(1)"),
  child2: document.querySelector(".heroBackground  .child:nth-child(2)"),
  child3: document.querySelector(".heroBackground  .child:nth-child(3)"),
  child4: document.querySelector(".heroBackground  .child:nth-child(4)"),
  heroSectionHeight: document.getElementById("hero").offsetHeight,
  heroText : document.querySelector(".heroText"),
  heroInView : true,

  hoverEffect : function (beingHovered) {
    if (beingHovered === this.child1) {
      this.child2.style.width = "20%";
      this.child3.style.width = "20%";
      this.child4.style.width = "20%";
      this.child1.style.width = "40%";
    } else if (beingHovered === this.child2) {
      this.child3.style.width = "20%";
      this.child1.style.width = "20%";
      this.child4.style.width = "20%";
      this.child2.style.width = "40%";
    } else if (beingHovered === this.child3) {
      this.child4.style.width = "20%";
      this.child1.style.width = "20%";
      this.child2.style.width = "20%";
      this.child3.style.width = "40%";
    } else {
      this.child4.style.width = "40%";
      this.child1.style.width = "20%";
      this.child2.style.width = "20%";
      this.child3.style.width = "20%";
    }
  },
  normalEffect : function () {
    hero.child1.style.width = "25%";
    hero.child2.style.width = "25%";
    hero.child3.style.width = "25%";
    hero.child4.style.width = "25%";
  }
}

//Hero End




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










//Sections
  const sections = document.getElementById("sections");
  const about = document.getElementsByClassName("ParentTitle")[0];
  const works = document.getElementsByClassName("ParentTitle")[1];
  const contact = document.getElementsByClassName("ParentTitle")[2];
  const sectionGrow = document.getElementById("sectionGrow");
  
  const sectionButton = document.querySelectorAll(" .ParentTitle .sectionButton"); 
  const sectionh4 = document.querySelectorAll(".ParentTitle h4");
//Sections End



//Footer
const insta = document.getElementsByClassName("footerSM")[0];
const facebook = document.getElementsByClassName("footerSM")[1];
const vsco = document.getElementsByClassName("footerSM")[2];
//Footer End


















//Global Functions
const cursorPage = document.getElementById("cursor");

function changeCursor(cursor){
  cursorPage.style.display = "block";
  if (cursor === about){
  cursorPage.style.backgroundImage = "url(/assets/images/aCursor.ico)";
} else if (cursor === works) {
  cursorPage.style.backgroundImage = "url(/assets/images/wCursor.ico)";
} else if (cursor === contact) {
  cursorPage.style.backgroundImage = "url(/assets/images/cCursor.ico)";
} else if(cursor === insta) {
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


function growSection(color) {
  sectionGrow.style.backgroundColor = color;
  sectionGrow.style.height = "100vh";
}
//Global Functions End




//Event Listeners


window.addEventListener("mousemove", function(event) {

  moveCursor(event);

  if (hero.heroInView) {
    if (hero.heroSections.matches(":hover")){

      let childHovered = event.target.className == "child1" ? hero.child1 :
      event.target.className == "child2" ? hero.child2 :
      event.target.className == "child3" ? hero.child3 :
      hero.child4;
  
      hero.hoverEffect(childHovered);
  
      hero.heroText.style.color = "transparent";
  } else{
    hero.normalEffect();
    hero.heroText.style.color = "var(--primary-contrast-color)";
  }
  }

  if(about.matches(":hover")){
    changeCursor(about);
  } else if(works.matches(":hover")){
    changeCursor(works);
  } else if(contact.matches(":hover")){
    changeCursor(contact);
  } else if(insta.matches(":hover")){
    changeCursor(insta);
  } else if(facebook.matches(":hover")){
    changeCursor(facebook);
  } else if(vsco.matches(":hover")){
    changeCursor(vsco);
  } else{
    changeCursor("none");
  }
}, false)
window.addEventListener("scroll", function() {
  if(this.window.scrollY - parseInt(hero.heroSectionHeight) >= 0){
    hero.heroInView = false;
  } else{
    hero.heroInView = true;
  }
}, false);
window.addEventListener("click", function(event) {
  console.log(event.target);
  if (event.target === about || event.target === sectionButton[0] || event.target === sectionh4[0]){
    growSection("var(--secondary-contrast-color)");
  } else if (event.target === works || event.target === sectionButton[1] || event.target === sectionh4[1]){
    growSection("var(--tertiary-contrast-color)");
  } else if (event.target === contact || event.target === sectionButton[2] || event.target === sectionh4[2]){
    growSection("var(--quantertary-contrast-color)");
  } 
}, false);

//Event Listeners End
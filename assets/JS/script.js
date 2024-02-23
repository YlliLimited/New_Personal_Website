//Hero 

const hero = {
  heroSections: document.querySelector(".heroBackground"),
  child1: document.querySelector(".heroBackground .child:nth-child(1)"),
  child2: document.querySelector(".heroBackground  .child:nth-child(2)"),
  child3: document.querySelector(".heroBackground  .child:nth-child(3)"),
  child4: document.querySelector(".heroBackground  .child:nth-child(4)"),

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
}
window.addEventListener("mousemove", function() {
  if (hero.heroSections.matches(":hover")){
    hero.child1.onmouseover = function() {hero.hoverEffect(hero.child1);};
    hero.child2.onmouseover = function() {hero.hoverEffect(hero.child2);};
    hero.child3.onmouseover = function() {hero.hoverEffect(hero.child3);};
    hero.child4.onmouseover = function() {hero.hoverEffect(hero.child4);};
    document.querySelector(".heroText").style.color = "transparent";
} else{
  hero.child1.style.width = "25%";
  hero.child2.style.width = "25%";
  hero.child3.style.width = "25%";
  hero.child4.style.width = "25%";
  document.querySelector(".heroText").style.color = "var(--color-other-0)";
}
})

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

navButton.onclick = function() {toggleNavbar()};
navBackground.onclick = function() {toggleNavbar()};

//Navbar End
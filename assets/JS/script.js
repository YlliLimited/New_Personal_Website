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

navButton.onclick = function() {toggleNavbar()};
navBackground.onclick = function() {toggleNavbar()};

//Navbar End

































//Event Listeners


window.addEventListener("mousemove", function(event) {
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
    hero.heroText.style.color = "var(--color-other-0)";
  }
  }
  
}, false)
window.addEventListener("scroll", function() {
  if(this.window.scrollY - parseInt(hero.heroSectionHeight) >= 0){
    hero.heroInView = false;
  } else{
    hero.heroInView = true;
  }
}, false);


//Event Listeners End
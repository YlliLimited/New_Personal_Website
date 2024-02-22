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
    document.querySelector(".heroText").style.textShadow = "1px 1px var(--quantertary-color)";
} else{
  hero.child1.style.width = "25%";
  hero.child2.style.width = "25%";
  hero.child3.style.width = "25%";
  hero.child4.style.width = "25%";

  document.querySelector(".heroText").style.boxShadow = "0px 0px var(--quantertary-color)";
}
console.log(hero.heroSections.matches(":hover"));
})
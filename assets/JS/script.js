const hero = {
  heroSections: document.querySelector(".heroBackground"),
  child1: document.querySelector(".child:nth-child(1)"),
  child2: document.querySelector(".child:nth-child(2)"),
  child3: document.querySelector(".child:nth-child(3)"),
  child4: document.querySelector(".child:nth-child(4)"),
  hovering: false,

  hoverEffect : function (beingHovered, other1, other2, other3) {
    other1.style.backgroundColor = window.getComputedStyle(beingHovered).color;
    other2.style.backgroundColor = window.getComputedStyle(beingHovered).color;
    other3.style.backgroundColor = window.getComputedStyle(beingHovered).color;

    // this.normalEffect();
  },

  normalEffect : function () {
    this.child1.style.width = "25%";
    this.child1.style.transition = "width 0.5s";
    this.child2.style.width = "25%";
    this.child2.style.transition = "width 0.5s";
    this.child3.style.width = "25%";
    this.child3.style.transition = "width 0.5s";
    this.child4.style.width = "25%";
    this.child4.style.transition = "width 0.5s";
  }
}

hero.child1.onmouseover = function() {hero.hoverEffect(hero.child1, hero.child2, hero.child3, hero.child4);};
hero.child2.onmouseover = function() {hero.hoverEffect(hero.child2, hero.child1, hero.child3, hero.child4);};
hero.child3.onmouseover = function() {hero.hoverEffect(hero.child3, hero.child2, hero.child1, hero.child4);};
hero.child4.onmouseover = function() {hero.hoverEffect(hero.child4, hero.child2, hero.child3, hero.child1);};


console.log(window.getComputedStyle(hero.child1).color);
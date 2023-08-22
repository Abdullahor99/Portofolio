import {
  isInViewport,
  bouncyAndOpcityAnimation,
  removeActiveFromIcons,
  setActiveClassToIcon,
} from "./helpfunc.js";

// ####### Nav Onclick verhalten -> zeigen oder verschwinden lassen ####

// Die idee ist folgendes: 100vh größen sind Mobil und auf manche end Geräten nicht ok
// Die Aufgabe ist: die höhe diese Elemente soll 100vh sein aber dynamich bzw. end gerät höhe.
document.addEventListener("DOMContentLoaded", () => {
  function adjustElementsHeight() {
    let elements = document.querySelectorAll(".view");
    elements.forEach((element) => {
      const window_height = window.innerHeight;
      let element_height = element.clientHeight;
      element.style.height = `${window_height}px`;
    });
  }
  adjustElementsHeight();
  window.addEventListener("resize", adjustElementsHeight);
});

let hamburgericon = document.querySelector("header > a");
hamburgericon.onclick = function (event) {
  event.preventDefault();
  hamburgericon.id == "open"
    ? (hamburgericon.id = "close")
    : (hamburgericon.id = "open");
};
//######## projkte onmouseover onmouseout verhalten ######## //
let projekte = document.querySelectorAll(".project");
projekte.forEach((projekt) => {
  projekt.onmouseover = function () {
    projekt.querySelector("h1").classList.add("hidden-elem");
    projekt.querySelector("a").classList.remove("hidden-elem");
    projekt.querySelector("p").classList.remove("hidden-elem");
  };
  projekt.onmouseout = function () {
    projekt.querySelector("h1").classList.remove("hidden-elem");
    projekt.querySelector("a").classList.add("hidden-elem");
    projekt.querySelector("p").classList.add("hidden-elem");
  };
});

// ################## bouncy #################
onload = () => {
  let views = document.querySelectorAll(".view");
  views.forEach((view) => {
    // if (isInViewport(view))
    // {
    //   removeActiveFromIcons();
    //   setActiveClassToIcon(view.id);
    //   bouncyAndOpcityAnimation(view);
    // }
  });
};

let bouncyElements = document.querySelectorAll(".bouncy");
bouncyElements.forEach((bouncy) => {
  bouncy.addEventListener("mouseenter", function () {
    bouncy.classList.add("bouncing");
    bouncy.style.animationDelay = "0s";
    bouncy.addEventListener("animationend", function () {
      bouncy.classList.remove("bouncing");
    });
  });
});

gsap.registerPlugin(ScrollToPlugin);
// ########## füge active klasse zur der gecklickten Icon ein #######
let icons = document.querySelectorAll(".header__nav-icon");
icons.forEach((icon) => {
  // on click verhalten
  icon.onclick = function (event) {
    event.preventDefault();
    let viewid = icon.getAttribute("href");
    gsap.to(window, { duration: 0.4, scrollTo: { y: viewid } });
    removeActiveFromIcons();
    // add active to current target
    icon.classList.add("active");
  };
});

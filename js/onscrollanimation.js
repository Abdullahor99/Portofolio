import { bouncyAndOpcityAnimation} from './helpfunc.js';
gsap.registerPlugin(ScrollTrigger);

const Profile = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-profile-info",
    start: "top 1%",
    end: "bottom bottom",
  }
});


Profile.to(".iletter , .withword",
  {
    opacity: 1,
    translateX: 0,
    duration: 1,
  }).to(".iletter , .withword",
  {
    opacity: 1,
    translateX: 0,
    duration: 2,
  }).to(".iletter , .withword",
  {
    opacity: 0,
    duration: 2,
  });
  
  Profile.to(".playword , .creativityword",
  {
    opacity: 1,
    translateX: 0,
    duration: 1,
  },"-=5").to(".playword , .creativityword",
  {
    opacity: 1,
    translateX: 0,
    duration: 2,
  },"-=4").to(".playword , .creativityword",
  {
    opacity: 0,
    duration: 2,
  },"-=2");
  
// Aboutme  onScroll Animation
const aboutme = gsap.timeline({
  scrollTrigger: {
    trigger: "#aboutme",
    start: "top 80%",
    end:  "bottom bottom",
  }
});

const aboutmeView = document.querySelector(".aboutme");

aboutme.add(() => {
  bouncyAndOpcityAnimation(aboutmeView);
})
  .to(".aboutme-h2",
    {
      opacity: 1,
      duration: 1,
    })
  .to(".aboutme__texts-cont",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.8,
    })
  .to(".aboutme__imge-div",
  {
    translateX: 0,
    opacity: 1,
    duration: 0.8,
  });

//MyWork on sroll Animation


const mywork = gsap.timeline({
  scrollTrigger: {
    trigger: "#mywork",
    start: "top 80%",
    end:  "bottom bottom",
  }
});

const myWorkView = document.querySelector(".mywork");

mywork.add(() => {
  bouncyAndOpcityAnimation(myWorkView);
})
  .to(".mywork-h2",
    {
      opacity: 1,
      duration: 0.3,
    })
  .to(".mywork-text-1",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.6,
    })
  .to(".project1",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.6,
    }).to(".project2",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.6,
    }).to(".mywork-text-2",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.6,
    })
    


const contactme = gsap.timeline({
  scrollTrigger: {
    trigger: ".contactme",
    start: "top top",
    end:  "bottom bottom",
  }
});

const contactmeView = document.querySelector(".contactme");

contactme.add(() => {
  bouncyAndOpcityAnimation(contactmeView);
})
  .to(".contactme-h2",
    {
      opacity: 1,
      duration: 0.3,
    })
  .to(".contactme-text",
    {
      translateX: 0,
      opacity: 1,
      duration: 0.6,
    })
  .to(".contactme__form",
    {
      translateY: 0,
      opacity: 1,
      duration: 0.6,
    });
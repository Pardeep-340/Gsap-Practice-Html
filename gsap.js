gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#box_parent",
    markers: false,
    start: "50% center",
    end: "1000% center",
    scrub: 2,
    pin: "#main_parent",
  },
});

tl.to("#box_parent", {
  x: "-311%",
});

tl.to(
  "#line",
  {
    width: "100%",
    duration: 1,
  },
  0
);

tl.fromTo(
  "#buttonOne",
  {
    boxShadow: "0px 0px 0 0 red inset",
  },
  {
    boxShadow: "150px 0px 0 0 red inset",
    duration: 0.12,
  },
  0
);
tl.fromTo(
  "#buttonTwo",
  {
    boxShadow: "0px 0px 0 0 red inset",
  },
  {
    boxShadow: "150px 0px 0 0 red inset",
    duration: 0.15,
  },
  0.17
);
tl.fromTo(
  "#buttonThree",
  {
    boxShadow: "0px 0px 0 0 red inset",
  },
  {
    boxShadow: "150px 0px 0 0 red inset",
    duration: 0.18,
  },
  0.385
);
tl.fromTo(
  "#buttonFour",
  {
    boxShadow: "0px 0px 0 0 red inset",
  },
  {
    boxShadow: "150px 0px 0 0 red inset",
    duration: 0.15,
  },
  0.75
);

// gsap.to(".box", {
//   backgroundColor: "black",
//   yoyo: true,
//   opacity: 1,
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".box", // The element that triggers the animation
//     start: "top center", // Animation starts when the top of the trigger hits the center of the viewport
//     end: "bottom center", // Animation ends when the bottom of the trigger hits the center of the viewport
//     scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     markers: true, // Enable markers for debugging
//   },
//  });

// gsap.from(".box", {
//   x: 500,
//   duration:2,
// });

// gsap.fromTo(
//   ".box",
//   {
//     x: 500,
//   },
//   {
//     x: 300,
//     duration: 5,
//     repeat: 1,
//   }
// );

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

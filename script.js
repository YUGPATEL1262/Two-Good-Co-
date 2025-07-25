function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation()

 gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });
let imgCon = document.querySelector("#img-container")

gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.6,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page1 #img-container",{
    scale:0.9,
    opacity:0,
    delay:1.4,
    duration:0.8,
    y:10
})
gsap.from("#text",{
    y:100,
    opacity:0,
    delay:0.6,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page2 .elem",{
    scale:0.9,
    opacity:0,
    delay:1.4,
    duration:1.8,
    y:10
})
gsap.from("#nav",{
    y:-100,
    opacity:0,
    delay:0.5,
    duration:0.3,
    stagger:0.1
})

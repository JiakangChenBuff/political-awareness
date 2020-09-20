var tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".animate1", 1, {x:500, opacity:0});
tl.from(".animate2", 1, {x:-500, opacity:0}, "+=0.3");

const scene = new ScrollMagic.Scene({
    triggerElement: "#start-scrolling"
})
    .setTween(tl)
    .addTo(controller);
var tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".animate1", .5, {x:500, opacity:0});
tl.from(".animate2", .5, {x:-500, opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement: "#start-scrolling"
})
    .setTween(tl)
    .addTo(controller);
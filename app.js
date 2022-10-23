let controller = new ScrollMagic.Controller();

let timeline1 = new TimelineMax();
timeline1
.to("#b1", 1, {
    opacity: 1
})

let scene1 = new ScrollMagic.Scene({
    triggerElement: '.problem',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline1)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline2 = new TimelineMax();
timeline2
.to("#b2", 1, {
    opacity: 1
})
.to("#b1", 1, {
    opacity: 0
}, "-=1")

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.solution',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline2)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline3 = new TimelineMax();
timeline3
.to("#b3", 1, {
    opacity: 1
})
.to("#b2", 1, {
    opacity: 0
}, "-=1")

let scene3 = new ScrollMagic.Scene({
    triggerElement: '.workflow',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline3)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline4 = new TimelineMax();
timeline4
.to("#b4", 1, {
    opacity: 1
})
.to("#b3", 1, {
    opacity: 0
}, "-=1")

let scene4 = new ScrollMagic.Scene({
    triggerElement: '.poc',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline4)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline5 = new TimelineMax();
timeline5
.to("#b5", 1, {
    opacity: 1
})
.to("#b4", 1, {
    opacity: 0
}, "-=1")

let scene5 = new ScrollMagic.Scene({
    triggerElement: '.results',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline5)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline6 = new TimelineMax();
timeline6
.to("#b6", 1, {
    opacity: 1
})
.to("#b5", 1, {
    opacity: 0
}, "-=1")

let scene6 = new ScrollMagic.Scene({
    triggerElement: '.hp',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline6)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline7 = new TimelineMax();
timeline7
.to("#b7", 1, {
    opacity: 1
})
.to("#b6", 1, {
    opacity: 0
}, "-=1")

let scene7 = new ScrollMagic.Scene({
    triggerElement: '.outlook',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline7)
//.addIndicators()
.addTo(controller);

//<><><><><><><><><><><><><><><><><><><><><><>//

let timeline8 = new TimelineMax();
timeline8
.to("#b8", 1, {
    opacity: 1
})
.to("#b7", 1, {
    opacity: 0
}, "-=1")

let scene8 = new ScrollMagic.Scene({
    triggerElement: '.references',
    duration: '20%',
    triggerHook: 0.8
})
.setTween(timeline8)
//.addIndicators()
.addTo(controller);

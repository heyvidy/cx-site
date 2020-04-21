import { CountUp } from '/js/countUp.min.js';

particlesJS.load('particles-js', 'js/particle.json', function() {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-2', 'js/particle2.json', function() {
    console.log('callback - particles.js config loaded');
});


let c1 = new CountUp('devices', 247);
let c2 = new CountUp('integrations', 319);
let c3 = new CountUp('brands', 31);
let c4 = new CountUp('cases', 151);


var node = document.querySelector("#devices");


if (isInViewport(node)) {
    c1.start();
    c2.start();
    c3.start();
    c4.start();
} else {
    c1.pause();
    c2.pause();
    c3.pause();
    c4.pause();
}


function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
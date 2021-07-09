var rule = CSSRulePlugin.getRule('span:after');

// gsap.to(rule,{cssRule: {scaleY:0,duration:1 }})
//    gsap.from('.menu', {opacity:0, duration: 0.6, x:-50,stagger:0.6});
//     gsap.from('.animal', {opacity:0, duration: 1, y:50,stagger:0.6 });
//     gsap.from('img', {duration:1, x:150,  opacity:0, delay:0.7})

var tl = gsap.timeline({ defaults: { duration: 2 } });

tl.from('.animal', { y: 100, stagger: 0.6, opacity: 0 })
	.to(rule, { duration: 1.6, cssRule: { scaleY: 0 } }, '-=2.2')
	.from('.bird', { y: 160, x: -140, opacity: 0 }, '-=1.7');

gsap.from('body', { opacity: 0, y: 10, duration: 1.5 });

document.getElementById('cta').addEventListener('click', () => {
	tl.reversed() ? tl.play() : tl.reverse();
});

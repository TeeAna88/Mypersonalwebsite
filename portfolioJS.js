anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});
 

gsap.to ('.par',{
    text: `I'm Tatiana. I'm a web-developer. `,
    duration: 4,
    repeat: -1,
    repeatDelay: 0.7,
    ease: 'none',
    yoyo: true,
    delay: 1
  })

gsap.fromTo('.btnView',{
   y: -300, 
   opacity: 0}, 
   {y: 20, 
   scale: 1.5,
   opacity: 1,
   duration: 3,
   delay: 2
})  

gsap.from('.navbar',{
   y: 20,
   ease: 'bounce.out',
   duration: 2.5
})



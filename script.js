var t1 = gsap.timeline();
var t2 = gsap.timeline();

gsap.to('.move > h2',{
      transform:"translateX(-200%)",
      duration:5,
      repeat:-1,
      ease:"none",
})

// t1.from('.main > nav > h1',{
//     y:-100,
//     duration:1,
// },"anime")
// t1.from('.main>nav>.part2>h1',{
//     y:-100,
//     duration:0.5,
//     stagger:0.6
// })

t1.from('.text-content > .left',{
    opacity:0,
    x:-1000,
    duration:1
})
t1.from('.text-content > .right',{
    opacity:0,
    x:1000,
    duration:1
})

t1.from('.main > .img3',{
    duration:1,
},"img")

t1.from('.main > img',{
    rotate:"0deg",
    ease: "power2.out",
    duration:2,
    stagger:true
},"img")

t1.from('.text-img',{
    width:"0px",
    ease: "bounce.out",
    duration:1.2,
})

t2.to('.mobile-menu',{
    clipPath: "circle(150% at 81% 100%)",
    duration:2,
    ease: "back.out(2)",
})

t2.pause();

document.querySelector('#menu').addEventListener('click',()=>{
t2.play();
})

document.querySelector('#close').addEventListener('click',()=>{
    t2.reverse();
})

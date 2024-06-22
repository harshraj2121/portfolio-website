var tl = gsap.timeline();

tl.from("#nav a", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.4,
})

tl.from("div h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.3,
})
tl.from("#full-page img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.5,
})

tl.from("#sub-head", {
    y: 10,
    delay:0.4,
    opacity:0,
    duration:0.3,
    stagger:0.3,
})

gsap.from("#slide-1" , {
    x:1000,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#slide-1",
        scroller: "body",
        start: "top 60%",
        end:"top 30%",
    }
})

gsap.from("#slide-2" , {
    x:1000,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#slide-2",
        scroller: "body",
        start: "top 70%",
        end:"top 40%",
    }
})

gsap.from("#slide-3" , {
    x:1000,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#slide-3",
        scroller: "body",
        start: "top 80%",
        end:"top 50%",
    }
})
gsap.to("#expertise p", {
    transform: "translateX(-61%)",
    scrollTrigger:{
        trigger: "#expertise",
        scroller: "body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:4,
        pin:true,
    }
})
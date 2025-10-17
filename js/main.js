console.log("javascript is working!")
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", function (){
    const cards = [
        {id: "#card1", endTranslateX: -2000, rotate: 45},
        {id: "#card2", endTranslateX: -1000, rotate: -30},
        {id: "#card3", endTranslateX: -2000, rotate: 45},
    ];

    ScrollTrigger.create({
        trigger: ".titlescroll",
        start: "top top",
        end: "+=90vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".titlescroll") {
                x: '${-350 * self.progress}vw',
                duration: 0.5,
                ease: "power3out",
            }
        }
    })

})


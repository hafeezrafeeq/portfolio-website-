const scroll = new LocomotiveScroll({
    el: document.querySelector('#page1'),
    smooth: true,      // smooth scroll enable
    multiplier: 1,     // speed control (kam zyada kar sakte ho)
    lerp: 0.1          // inertia smoothness (0.1 = smooth, 0.05 = aur smooth)
});

const tl = gsap.timeline()

tl.to("#page1", {
    y: "100vh",
    scale: 0.5,
    duration: 0,

})

tl.to("#page1", {
    y: "0vh",
    duration: 1,

})

tl.to("#page1", {
    rotate: 360,
    scale: 1,
    duration: 1,
})

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.onmouseenter = () => {
        cards.forEach((otherCard, i) => {
            if (i > index) {
                otherCard.classList.add("shift");
            }
        });
    };

    card.onmouseleave = () => {
        cards.forEach((otherCard) => {
            otherCard.classList.remove("shift");
        });
    };
});
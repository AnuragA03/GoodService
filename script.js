// ! Smooth scrolling feature from locomotive js added from github
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// ! Video Container hovering icon functionality
function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    // ! Icon coming and going inside video
    videocon.addEventListener("mouseenter", function () {
        // ! Now instead of using the below code you can do using GSAP
        // playbtn.style.opacity = 1;
        // playbtn.style.scale = 1;

        // ! GSAP animation
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        })
    })

    // ! Moving functionality
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x-70,
            top: dets.y-80,
        })
    })
}
videoconAnimation();

// ! Loading of h1 on page 1
function loadinganimation(){
    gsap.from("#page1 h1", {
        y: 30,
        opacity: 0, 
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0, 
        delay: 1.2,
        duration: 0.5,
    })
}
loadinganimation()
import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#V19", { xPercent: -50, yPercent: -50, transformOrigin: "center center" })
gsap.set("#targeting-display", { xPercent: -50, yPercent: -50, transformOrigin: "center center" })
gsap.set("#Speed-Needle", { transformOrigin: "right bottom" })
gsap.set("#Speed", { transformOrigin: "center center" })

export function V19Chase() {
    var targetingTL = gsap.timeline();
    targetingTL.from("#targeting-display", { duration: 0.75, alpha: 0 }, "blip")
        .from("#blip", { duration: 0.25, alpha: 0 }, "blip")
        .from("#V19", { duration: 0.5, alpha: 0 })
        .fromTo("#Speed", { duration: .5, drawSVG: "25%" }, { duration: 2.5, drawSVG: "60%" }, "chase")
        .to("#Speed-Needle", { duration: 2.5, rotation: 55 }, "chase")
        .to("#blip", { duration: 2, translateX: 60, ease: "none" }, "chase")
        .to("#blip", { duration: 1, translateX: 30, ease: "none" })
        .to("#blip", { duration: 0.5, translateX: 40, ease: "none" })
        .to("#V19", { duration: 3.5, ease: "none", motionPath: { path: "#V19-path" } }, "chase")
        .to("#targeting-display", { duration: 3.5, ease: "none", motionPath: { path: "#targeting-path" } }, "chase")
        .fromTo("#laser-fire-2", { duration: .5, drawSVG: "0%" }, { duration: .5, drawSVG: "100%", repeat: 7, delay: 1 }, "chase")
        .fromTo("#laser-fire-1", { duration: .5, drawSVG: "0%" }, { duration: .5, drawSVG: "100%", repeat: 7, delay: 1 }, "chase")
        .to(".energy", { duration: .5, alpha: 0, stagger: 0.5, delay: 1 }, "chase")
        .to("#V19", { duration: .5, alpha: 0, repeat: 2 }, "hit")
        .to("#blip", { duration: .5, alpha: 0, delay: 1 }, "hit")
        .fromTo("#Speed", { duration: .5, drawSVG: "60%" }, { duration: 2.5, drawSVG: "35%" }, "blaster-fade")
        .to("#Speed-Needle", { duration: 2.5, rotation: 5 }, "blaster-fade")
        .to("#laser-fire-2", { duration: .5, alpha: 0 }, "blaster-fade")
        .to("#laser-fire-1", { duration: .5, alpha: 0 }, "blaster-fade")
        .from("#targeting-display", { duration: 0.5, alpha: 0 }, "blaster-fade")
        .to(".energy", { duration: .5, alpha: 1 }, "blaster-fade")

    // .to("#Speed-Needle", { duration: 2.5, rotation: -30 }, "launch-speed")
    // .fromTo("#Speed", { duration: .5, drawSVG: "0" }, { duration: 2.5, drawSVG: "25%" }, "launch-speed")

    return targetingTL

}
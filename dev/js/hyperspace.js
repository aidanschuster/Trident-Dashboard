import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#engine-left", { transformOrigin: "top right" })
gsap.set("#engine-blast", { transformOrigin: "bottom center" })
gsap.set("#engine-flare", { transformOrigin: "bottom center" })
gsap.set("#Speed-Needle", { transformOrigin: "right bottom" })
gsap.set("#Speed", { transformOrigin: "center center" })

export function hyperspace() {
    var hyperspaceTL = gsap.timeline();
    hyperspaceTL.from("#Hyperspaceengaged", { duration: 0.5, alpha: 0 })
        .to("#Hyperspaceengaged", { duration: 0.5, alpha: 0, delay: 1 }, "text-out")
        .to("#Engine", { duration: 0.5, alpha: 1 })
        .to("#engine-blast", { duration: .75, scaleY: 1.5 }, "max")
        .to("#engine-flare", { duration: .75, scaleY: 1.5 }, "max")
        .to("#engine-flare", { duration: .35, scale: 1.5, yoyo: true, repeat: 4 }, "hyper")
        .to("#Speed-Needle", { duration: 2.5, rotation: 180 }, "hyper")
        .fromTo("#Speed", { duration: .5, drawSVG: "35%" }, { duration: 2.5, drawSVG: "100%" }, "hyper")
        .to("#Engine", { duration: 0.5, alpha: 0 })

    return hyperspaceTL

}
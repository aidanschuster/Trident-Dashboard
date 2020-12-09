import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#engine-left", { transformOrigin: "top right" })
gsap.set("#engine-blast", { transformOrigin: "bottom center" })
gsap.set("#engine-flare", { transformOrigin: "bottom center" })
gsap.set("#Speed-Needle", { transformOrigin: "right bottom" })
gsap.set("#Speed", { transformOrigin: "center center" })

export function engineLaunch() {
    var launchTL = gsap.timeline();
    launchTL.from("#Engine", { duration: 0.5, alpha: 0 })
        .to("#engine-right", { duration: .75, rotation: -45 }, "open")
        .to("#engine-left", { duration: .75, rotation: 45 }, "open")
        .from("#engine-blast", { duration: .75, scale: 0 }, "flare")
        .from("#engine-flare", { duration: .75, scale: 0 }, "flare")
        .to("#engine-flare", { duration: .35, scale: 1.2, yoyo: true, repeat: 4 }, "launch-speed")
        .to("#Speed-Needle", { duration: 2.5, rotation: -30 }, "launch-speed")
        .fromTo("#Speed", { duration: .5, drawSVG: "0" }, { duration: 2.5, drawSVG: "25%" }, "launch-speed")
        .to("#engine-flare", { duration: .75, scale: 1 })
        .to("#Engine", { duration: 0.5, alpha: 0 })

    return launchTL

}
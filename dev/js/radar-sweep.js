import { gsap } from "gsap";

gsap.set("#Sweeper", { transformOrigin: "right bottom" })

export function radarSweep() {
    var sweepTL = gsap.timeline();
    sweepTL.to("#Sweeper", { duration: 1.5, rotation: 360, ease: "none" })

    return sweepTL.repeat(31)

}
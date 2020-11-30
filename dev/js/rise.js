import { gsap } from "gsap";

gsap.set(".center-top", { transformOrigin: "center top" })

export function riseAnimation() {
    var riseTL = gsap.timeline();

    riseTL.from("#Sphere", { duration: 1.25, y: 400, ease: "none" })
        .from("#Tail", { duration: .8, y: 400, alpha: 0, ease: "none" }, "-=.75")
        .from("#Bottom-Hive", { duration: .5, scale: 0, ease: "none" }, "-=0.85")
        .from("#Middle-Hive", { duration: .5, scale: 0, ease: "none" }, "-=0.75")
        .from("#Top-Hive", { duration: .5, scale: 0, ease: "none" }, "-=0.65")

    return riseTL;
}

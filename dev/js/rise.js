import { gsap } from "gsap";

gsap.set(".center-top", { transformOrigin: "center top" })

export function riseAnimation() {
    var riseTL = gsap.timeline();

    riseTL.from("#Sphere", { duration: 1.5, y: 400, ease: "none" })
        .from("#Tail", { duration: 1, y: 400, alpha: 0, ease: "none" }, "-=1")
        .from("#Bottom-Hive", { duration: 1, scale: 0, ease: "none" }, "-=0.85")
        .from("#Middle-Hive", { duration: 1, scale: 0, ease: "none" }, "-=0.75")
        .from("#Top-Hive", { duration: 1, scale: 0, ease: "none" }, "-=0.65")

    return riseTL;
}

import { gsap } from "gsap";

gsap.set("#Ball", { transformOrigin: "center center" })

export function rollAnimation() {
    var rollTL = gsap.timeline();

    rollTL.from("#Ball", { duration: 0.5, scale: 0, ease: "none" })
        .from("#Symbol", { duration: 0.5, alpha: 0 })

    return rollTL;
}

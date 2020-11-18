import { gsap } from "gsap";

gsap.set("#Ball", { transformOrigin: "center center" })

export function rollAnimation() {
    var rollTL = gsap.timeline();

    rollTL.from("#Ball", { duration: 1, scale: 0, ease: "none" })
        .from("#Symbol", { duration: 1, alpha: 0 })

    return rollTL;
}

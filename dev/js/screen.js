import { gsap } from "gsap";

gsap.set("#Dashboard", { transformOrigin: "center center" })

export function screenAnimation() {
    var screenTL = gsap.timeline();

    screenTL.from("#Dashboard", { duration: 0.5, scaleY: 0, ease: "none" })

    return screenTL;
}

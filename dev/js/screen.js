import { gsap } from "gsap"

var screenTL = gsap.timeline();

export function screenAnimation() {
    screenTL.from("Dashboard", { duration: 1, scaleX: 0 });

    return screenTL;
}

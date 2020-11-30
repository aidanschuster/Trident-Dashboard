import { gsap } from "gsap";

export function logoFade() {
    var logoFadeTL = gsap.timeline();
    logoFadeTL.to("#Colicoid-Logo", { duration: 0.5, alpha: 0 })

    return logoFadeTL

}
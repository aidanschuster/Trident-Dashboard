import { gsap } from "gsap";

export function logoFade() {
    var logoFadeTL = gsap.timeline();
    logoFadeTL.to("#Colicoid-Logo", { duration: 0.3, alpha: 0 })

    return logoFadeTL

}
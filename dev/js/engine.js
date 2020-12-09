import { gsap } from "gsap";

export function engineLaunch() {
    var launchTL = gsap.timeline();
    launchTL.from("#Engine", { duration: 0.5, alpha: 0 })

    return launchTL

}
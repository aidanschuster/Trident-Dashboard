import { gsap } from "gsap"

var sphereTL = gsap.timeline();

export function sphereAnimation() {
    sphereTL.from("Coli-Sphere", { duration: 1, y: 400 });

    return sphereTL;
}

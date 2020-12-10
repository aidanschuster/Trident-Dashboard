import { gsap } from "gsap";

export function fuelSlosh() {
    var sloshTL = gsap.timeline();
    sloshTL.to("#Fuel", { duration: 4, translateX: 80, ease: "none", yoyo: true, repeat: 12 })

    return sloshTL
}
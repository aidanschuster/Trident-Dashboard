import { gsap } from "gsap";

export function fuelDisplay() {
    var fuelTL = gsap.timeline();

    fuelTL.from("#Fuel-Tank", { duration: .5, alpha: 0 })
        .from("#fuel", { duration: .5, translateX: -100, translateY: 100 })
    return fuelTL;
}
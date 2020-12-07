import { gsap } from "gsap"

export function weaponsDisplay() {
    var weaponsTL = gsap.timeline();

    weaponsTL.from("#Weapons-1", { duration: 0.5, translateX: 250, alpha: 0 })
        .from("#Weapons-2", { duration: 0.5, translateX: 250, alpha: 0 }, "-=.25")
        .from("#Weapons-3", { duration: 0.5, translateX: 250, alpha: 0 }, "-=.25")
        .from("#Weapons-4", { duration: 0.5, translateX: 250, alpha: 0 }, "-=.25")
    return weaponsTL;
}
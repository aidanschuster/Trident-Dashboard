import { gsap } from "gsap"

export function tentacleSway() {
    var swayTL = gsap.timeline();
    swayTL.to("#RT-P1", { duration: 0.5, rotation: -20 })
        .to("#RT-Joint-1", { duration: 0.5, rotation: -20, translateX: 15, translateY: -5 })
        .to("#RT-Panel-2", { duration: 0.5, rotation: -30, translateX: 20, translateY: -5 })
        .to("#RT-Joint-2", { duration: 0.5, rotation: -30, translateX: 60, translateY: -15 })
        .to("#RT-Panel-3", { duration: 0.5, rotation: -20, translateX: 65, translateY: -17 })
        .to("#RT-Joint-3", { duration: 0.5, rotation: -15, translateX: 88, translateY: -24 })
        .to("#RT-P4", { duration: 0.5, rotation: 5, translateX: 90 })
        .to("#RT-Joint-4", { duration: 0.5, rotation: -10, translateX: 100, translateY: -17 })
        .to("#RT-P5", { duration: 0.5, rotation: -20, translateX: 65, translateY: -17 })
        .to("#RT-Joint-5", { duration: 0.5, rotation: -20, translateX: 65, translateY: -17 })
        .to("#RT-Spear", { duration: 0.5, rotation: -20, translateX: 65, translateY: -17 })

    return swayTL
}
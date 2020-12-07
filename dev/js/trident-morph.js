import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export function tridentMorph() {
    var hiveMorphTL = gsap.timeline();
    hiveMorphTL.from("#Hive-outline", { duration: 0.25, alpha: 0 }, "morph-reveal")
        .from("#tail-morph", { duration: 0.25, alpha: 0 }, "morph-reveal")
        .to("#Hive-outline", { duration: 0.5, morphSVG: "#Head-outline" }, "morph-together")
        .to("#tail-morph", { duration: 0.5, morphSVG: "#Middle-tentacle-outline" }, "morph-together")
        .from("#Trident", { duration: 0.5, alpha: 0 }, "-=0.25")

    return hiveMorphTL
}

import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.set(".center-top", { transformOrigin: "center top" })

gsap.registerPlugin(MorphSVGPlugin);

export function tridentMorph() {
    var hiveMorphTL = gsap.timeline();
    hiveMorphTL.to("#Hive-outline", { duration: 1, morphSVG: "#Head-outline" })
        .to("#tail-morph", { duration: 1, morphSVG: "#Middle-tentacle-outline" })

    return hiveMorphTL
}

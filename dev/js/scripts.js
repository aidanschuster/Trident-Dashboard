import { gsap } from "gsap"
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { screenAnimation } from "./screen.js"
import { rollAnimation } from "./roll.js"
import { riseAnimation } from "./rise.js"
import { tridentMorph } from "./trident-morph.js"
import { logoFade } from "./logo-fade.js"
import { tentacleSway } from "./tentacle-sway.js"

var mainTL = gsap.timeline();

tentacleSway()

mainTL.add(screenAnimation())
    .add(rollAnimation())
    .add(riseAnimation())
    .add(logoFade(), "morph")
    .add(tridentMorph(), "morph")


GSDevTools.create();
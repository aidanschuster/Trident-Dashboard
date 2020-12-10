import { gsap } from "gsap"
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { screenAnimation } from "./screen.js"
import { rollAnimation } from "./roll.js"
import { riseAnimation } from "./rise.js"
import { tridentMorph } from "./trident-morph.js"
import { logoFade } from "./logo-fade.js"
import { tentacleSway } from "./tentacle-sway.js"
import { weaponsDisplay } from "./weapons.js"
import { fuelDisplay } from "./fuel-wipe.js"
import { radarDisplay } from "./radar-wipe.js"
import { speedDisplay } from "./speed-wipe.js"
import { radarSweep } from "./radar-sweep.js"
import { engineLaunch } from "./engine.js"
import { V19Chase } from "./targeting.js"
import { hyperspace } from "./hyperspace.js"
import { fuelSlosh } from "./fuel-slosh.js"


var mainTL = gsap.timeline();

tentacleSway()
radarSweep()
fuelSlosh()

mainTL.add(screenAnimation())
    .add(rollAnimation())
    .add(riseAnimation())
    .add(logoFade(), "morph")
    .add(tridentMorph(), "morph")
    .add(weaponsDisplay(), "gauge")
    .add(fuelDisplay(), "gauge")
    .add(radarDisplay(), "gauge")
    .add(speedDisplay(), "gauge")
    .add(engineLaunch())
    .add(V19Chase())
    .add(hyperspace())


GSDevTools.create();
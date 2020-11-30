import { gsap } from "gsap"
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { screenAnimation } from "./screen.js"
import { rollAnimation } from "./roll.js"
import { riseAnimation } from "./rise.js"

var mainTL = gsap.timeline();

mainTL.add(screenAnimation())
    .add(rollAnimation())
    .add(riseAnimation())


GSDevTools.create();
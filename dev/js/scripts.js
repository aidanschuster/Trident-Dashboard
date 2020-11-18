import { gsap } from "gsap"

import { screenAnimation } from "./screen.js"
import { rollAnimation } from "./roll.js"
import { riseAnimation } from "./rise.js"

var mainTL = gsap.timeline();

mainTL.add(screenAnimation())
    .add(rollAnimation())
    .add(riseAnimation())
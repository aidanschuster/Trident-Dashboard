import { gsap } from "gsap"

import { sphereAnimation } from "./coli-sphere.js"

var mainTL = gsap.timeline();

mainTL.add(sphereAnimation());

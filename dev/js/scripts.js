import { gsap } from "gsap"

import { screenAnimation } from "./screen.js"

var mainTL = gsap.timeline();

mainTL.add(screenAnimation());

import { kutyaLISTA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js"

const tartalomElem = $(".tartalom");

new Kartyak(kutyaLISTA, tartalomElem)
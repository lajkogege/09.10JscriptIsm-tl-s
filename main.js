import { kutyaLISTA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js"
const kivalasztottKutyaLista=[]
const tartalomElem = $(".tartalom");

new Kartyak(kutyaLISTA, tartalomElem)

//tegyük bele a kiválasztott kutya adatait a kivalsztottKutyaListaba

//itt pedig feliratkozunk a kártya osztályban létrehozott eseéményére
$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    console.log(kivalasztottKutyaLista)
})
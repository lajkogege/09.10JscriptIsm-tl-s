import Kartya from "./Kartya.js";

export default class Kartyak{
    #lista=[]
    #tartalomElem
    constructor(lista,tartalomElem){
        this.#lista=lista
        this.#tartalomElem=tartalomElem
        this.#tartalomElem.empty()
        this.kutyakKiir()
    }
    kutyakKiir(){
        this.#lista.forEach((elem) => {
            console.log(elem) 
            new Kartya(elem, this.#tartalomElem);
        });
    }
   
} 
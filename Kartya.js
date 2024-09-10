export  default class Kartya{
    //adattagok
    #obj={} //privát adattag
    #szuloELem;
    //constructor
    constructor(obj, szuloELem){
        this.#obj=obj
        this.#szuloELem=szuloELem
        this.KutyaKiir()
    }
    //tagfügvény az adattagokon dolgoznak
    KutyaKiir(){
        //egyetlen egy kutya kiirása
       //const tartalomElem=$(".tartalom");
        this.#szuloELem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body >
                    <h3 class="card-title" >${this.#obj.nev}</h3>
                    <p>${this.#obj.kor}</p>
                    <p>${this.#obj.nev}</p>
                    <button class=" btn btn-succes">Kiválaszt</button>
                </div>
            `)
   
    }
}
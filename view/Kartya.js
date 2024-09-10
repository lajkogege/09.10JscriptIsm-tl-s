export default class Kartya {
    //adattagok
    #obj = {} //privát adattag
    #szuloELem;
    //constructor
    constructor(obj, szuloELem) {
        this.#obj = obj
        this.#szuloELem = szuloELem
        this.KutyaKiir()
        this.KutyaKiir()
        //gombelem a Kartya saját adattagja lesz
        this.gombElem = $(".kivalasztgomb:last") //mindig az utolso kiválasztott gomb legyen ezt csinálja a last 
        console.log(this.gombElem)
        this.esemenyKezelo()
    }
    //tagfügvény az adattagokon dolgoznak
    KutyaKiir() {
        //egyetlen egy kutya kiirása
        //const tartalomElem=$(".tartalom");
        this.#szuloELem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body >
                    <h3 class="card-title" >${this.#obj.nev}</h3>
                    <p>${this.#obj.kor}</p>
                    <p>${this.#obj.nev}</p>
                    <button class=" kivalasztgomb btn btn-succes">Kiválaszt</button>
                </div>
            `)

    }

    //gombeseények kezelése
    esemenyKezelo() {
        this.gombElem.on("click", function(){
            console.log(this )
        }
           
        )
    }
}

//this jelentése: function névtelen fügvény esetén a this azta a html dom elemet jelenti, ami az eseményt kiváltota, vagy épepen amelyikre hivatkozunk
//nyil fv. esetén a this arra az osztály példányra muatatt amit az adott nyil fv közbe fogja
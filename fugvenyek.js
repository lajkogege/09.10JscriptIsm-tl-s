export function KutyaKiir(kutya){
    //egyetlen egy kutya kiirása
   const tartalomElem=$(".tartalom");
    tartalomElem.append(`
        <div class="card col-lg-4 col-md-6">
            <div class="card-body >
                <h3 class="card-title" >${kutya.nev}</h3>
                <p>${kutya.kor}</p>
                <p>${kutya.nev}</p>
                <button class=" btn btn-succes>Kiválaszt</button>
            </div>
        `)
    console.log(tartalomElem);  
}

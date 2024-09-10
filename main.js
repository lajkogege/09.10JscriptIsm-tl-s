//kutyák adatait megjeleniteni külön divekben, egymás mellet a kutyák adatait


//Hozzunk létre változokat
const cim = "Minden amit a kutyárol tudni kell" //értéke nem változó a const-nak
//cim="Ez egy másik alcím"
let nev = "Jenő"
console.log("név:", nev);

//címet irjuk ki a headerben a meglévő cím alá
//megfogjuk az adott html elemet
const cimElem= $("header");
console.log(cimElem);
//majd hozzá füzzünk vagy bele írunk
cimElem.append(`<p>${cim}</p>`)

const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"szuka"
}



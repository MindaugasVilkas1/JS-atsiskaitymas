/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(element => isvestiMasinas(element))
    })


let isvestiMasinas = (masinos) => {
        document.querySelector("#output").innerHTML += `
    <div>
    <h2>${masinos.brand}: </h2>
    <p>
    Modelis: ${masinos.models.map(models=>`<span> ${models}</span>`)}<hr>
    </p>
    </div>
    `
}

/* <p>
Tipas:${filmas.tipas.map(tipas=>`<span> ${tipas}</span>`)}
</p>
*/
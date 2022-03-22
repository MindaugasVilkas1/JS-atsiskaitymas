/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let skaicius = 0;
let clickMe = document.querySelector("#btn__element");
let disp = document.getElementById("btn__state");
clickMe.onclick = function() {
    skaicius++;
    disp.innerHTML = skaicius

}
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    let kg = Number(document.querySelector("#search").value)
    let poundConverter = kg * 2.2046;
    let gramConverter = kg / 0.0010000;
    let ozConverter = kg * 35.274;
    document.querySelector("#output").innerHTML = `
    <h1>${poundConverter} Svarai</h1>
    <h1>${gramConverter} Gramai</h1>
    <h1>${ozConverter} Uncijos</h1>
    `
})
/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.querySelector(".btn-container").addEventListener("click", e => {
    e.preventDefault()
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(element => isvestiDuomenis(element))
        })

    // data.forEach(movie => isvestiFilmus(movie))
    idMessage = document.querySelector("#message")
    idMessage.style.display = "none";

})
let isvestiDuomenis = (duomenys) => {
    document.querySelector("#output").innerHTML += `
    <div>
    <h2>${duomenys.login}: </h2>
    <span>${duomenys.avatar_url}</span>
    </div>
    `
}
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
    sum = (skaicius1, skaicius2) => {
        let atsakymas = skaicius1 + skaicius2
        return atsakymas

    };
    subtraction = (skaicius1, skaicius2) => {
        let atsakymas1 = skaicius1 - skaicius2
        return atsakymas1

    };
    multiplication = (skaicius1, skaicius2) => {
        let atsakymas2 = skaicius1 * skaicius2
        return atsakymas2
    };
    division = (skaicius1, skaicius2) => {
        let atsakymas3 = skaicius1 / skaicius2
        return atsakymas3
    }

}
let Uzduotis = new Calculator();
console.log(Uzduotis.sum(50, 100));
console.log(Uzduotis.subtraction(100, 50));
console.log(Uzduotis.multiplication(100, 50));
console.log(Uzduotis.division(100, 50));
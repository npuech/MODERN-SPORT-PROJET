let calculAdd = 4 + 5;

let calculMulti = 5 * 5;

if (calculAdd === 9) {
    console.log("Le résultat est bon !");
} else {
    console.log("Ce n'est pas le bon résulat.")
}

if (calculMulti >= 25) {
    console.log("C'est le bon résulat!")
} else {
    console.log("Ce n'est pas le bon résulat")
}

const age = 19;
const firstName = "Noa";

if (age === 19 && firstName === "Noa") {
    console.log("Tout est bon !")
} else {
    console.log("Y'a une erreur !")
}




function canDrive (age, pays) {
    if (
        (age >= 18 && pays === "FR") ||
        (age >= 16 && pays === "US")
    ) {
        return true
    } 
    return false
}

console.log(canDrive(19, "FR"));

//Fonction Info de la personne

function personInfo (age, nom, prénom, pays) {
    if (
        (age <= 18 && nom === "Puech") ||
        (prénom === "Noa" && pays === "FR")
    ) {
        return true
    } 
    return false
}

console.log(personInfo(16, "Puech", "Noa", "FR"));
//Affiche les infos de la personne : age, nom, prénom, pays.

// Fonction nombre aléatoire

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
const solution = getRandomInt(10)
console.log(solution);
// Affiche un chiffre aléatoire entre 0 et 10.


function isRight(n) {
    return solution === n
}

function guess() {
    const number = prompt("Entrez un chiffre") * 1

    return isRight(number)
}

for (i = 0; i < 3; i++) {
    if(guess()) {
        console.log("Bravo ! :D")
        break;
    } else if (i === 2) {
        console.log("Vous avez perdu :/")
    }
}
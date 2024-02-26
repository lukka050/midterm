// guess the number
let numAttempts = parseInt(prompt("რამდენი ცდის უფლება გსურთ?"));

// თუ ინპუტში მიუთითებს 0 ან Nan მცდელობის რაოდენობა უნდა იყოს 10
if (isNaN(numAttempts) || numAttempts <= 0) {
    numAttempts = 10;
}

// კოდმა უნდა დააგენერიროს რიცხვი რომელიც იქნება 1-1000 ინტერვალში მოთავსებული
const randomNumber = Math.floor(Math.random() * 1000);
console.log(randomNumber)


for (let i = 1; i <= numAttempts; i++) {
    // იმდენჯერ შემოყავს რიცხვი რაც 1 ინპუტზე მიუთითა ამავდროულად ხედავს თუ რამდენი ცდა დარჩა
    const guess = parseInt(prompt("მცდელობა" + i + "/" + numAttempts + ": გამოცანი რიცხვი ( 1 - 1000 ინტერვალში ):"));

    if (guess === randomNumber) {
        console.log("ყოჩაღ სწორედ გამოიცანი!");
        break;
    } else if (guess < randomNumber) {
        console.log("უფრო მაღალი!");
    } else {
        console.log("უფრო დაბალი!");
    }
    if (i + 1 > numAttempts) {
        console.log("ცდების რაოდენობა დასრულდა. სწორი რიცხვი იყო ", randomNumber);
    }
}




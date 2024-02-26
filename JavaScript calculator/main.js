// *Calculator*
while (true) {
    const end = confirm("დავასრულოთ გამოთვლა?");
    if (end) {
        break;
    }

    // მომხმარებელს შემოყავს პირველი რიცხვი, სასურველი ოპერაცია და მეორე რიცხვი
    const num1 = Number(prompt("შემოიყვანეთ პირველი რიცხვი"));
    const operation = prompt("შემოიყვანეთ სასურველი ოპერაცია");
    const num2 = Number(prompt("შემოიყვანეთ მეორე რიცხვი"));

    let plius = (num1) + (num2);
    let minus = num1 - num2;
    let gamravleba = num1 * num2;
    let gayofa = num1 / num2;


    if (isNaN(num1) || isNaN(num2)) {
        console.log("არასწორი მნიშვნელობა! შემოიყვანეთ მხოლოდ ციფრები")
        continue
    }

    if (operation === "+") {
        console.log(num1, operation, num2, "=", plius)
    } else if (operation === "-") {
        console.log(num1, operation, num2, "=", minus)
    } else if (operation === "*") {
        console.log(num1, operation, num2, "=", gamravleba)
    } else if (operation === "/") {
        console.log(num1, operation, num2, "=", gayofa)
    } else {
        console.log("არასწორი ოპერაცია")
    }
}


// *Calculator 2*

// while (true) {
//     const close = confirm("end?");
//     if (close) {
//         break;
//     }
// }

// const a = prompt("num1");
// const o = prompt("operation");
// const b = prompt("num2");

// switch (o) {
//     case "+":
//         console.log(a, o, b, "=", a + b);
//         break;
//     case "-":
//         console.log(a, o, b, "=", a - b);
//         break;
//     case "*":
//         console.log(a, o, b, "=", a * b);
//         break;
//     case "/":
//         console.log(a, o, b, "=", a / b);
//         break;
//     default:
//         console.log("invalid number or operation")
// }





// *Calculator*
while (true) {

    // მომხმარებელს შემოყავს პირველი რიცხვი, სასურველი ოპერაცია და მეორე რიცხვი
    const num1 = Number(prompt("შემოიყვანეთ პირველი რიცხვი"));
    const operation = prompt("შემოიყვანეთ სასურველი ოპერაცია");
    const num2 = Number(prompt("შემოიყვანეთ მეორე რიცხვი"));


    if (isNaN(num1) || isNaN(num2)) {
        console.log("არასწორი მნიშვნელობა! შემოიყვანეთ მხოლოდ ციფრები")
        continue
    }

    if (operation === "+") {
        console.log(num1, operation, num2, "=", (num1) + (num2))
    } else if (operation === "-") {
        console.log(num1, operation, num2, "=", num1 - num2)
    } else if (operation === "*") {
        console.log(num1, operation, num2, "=", num1 * num2)
    } else if (operation === "/") {
        console.log(num1, operation, num2, "=", num1 / num2)
    } else {
        console.log("არასწორი ოპერაცია")
    }

    const end = confirm("დავასრულოთ გამოთვლა?");
    if (end) {
        break;
    }
}


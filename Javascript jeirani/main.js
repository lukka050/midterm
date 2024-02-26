// *ჯეირანი*

let meaning1 = prompt("მოთამაშე 1-> შემოიყვანეთ მნიშვნელობა: მაკრატელი, ჭა, ქაღალდი ")
let meaning2 = prompt("მოთამაშე 2-> შემოიყვანეთ მნიშვნელობა: მაკრატელი, ჭა, ქაღალდი ")

console.log("მოთამაშე 1 ->", meaning1)
console.log("მოთამაშე 2 ->", meaning2)

let x = "მაკრატელი"
let y = "ჭა"
let z = "ქაღალდი"

if (meaning1 === x && meaning2 === y) {
    console.log("გამარჯვებულია მოთამაშე 2")
} else if (meaning1 === x && meaning2 === z) {
    console.log("გამარჯვებულია მოთამაშე 1")
} else if (meaning1 === meaning2) {
    console.log("შედეგი: ფრე")
} else if (meaning1 === y && meaning2 === x) {
    console.log("გამარჯვებულია მოთამაშე 1")
} else if (meaning1 === y && meaning2 === z) {
    console.log("გამარჯვებულია მოთამაშე 2")
} else if (meaning1 === z && meaning2 === x) {
    console.log("გამარჯვებულია მოთამაშე 2")
} else if (meaning1 === z && meaning2 === y) {
    console.log("გამარჯვებულია მოთამაშე 1")
} else {
    console.log("არასწორი მნიშვნელობა")
}
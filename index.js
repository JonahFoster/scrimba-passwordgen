const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
const characters = [letters, numbers, symbols]
const numbersOff = [letters, symbols]
const symbolsOff = [letters, numbers]
const passwordLeftEl = document.getElementById("password-result-left")
const passwordRightEl = document.getElementById("password-result-right")
const numberButtonEl = document.getElementById("numbers-button")
const symbolButtonEl = document.getElementById("symbols-button")

let numberToggle = true
let symbolToggle = true

function numbersSwitch() {
    if (numberToggle === true) {
        numberToggle = false
        numberButtonEl.textContent = "Numbers: Off"
    } else {
        numberToggle = true
        numberButtonEl.textContent = "Numbers: On"
    }
}

function symbolsSwitch() {
    if (symbolToggle === true) {
        symbolToggle = false
        symbolButtonEl.textContent = "Symbols: Off"
    } else {
        symbolToggle = true
        symbolButtonEl.textContent = "Symbols: On"
    }
}

function generatePassword() {
    generateForBlock(passwordLeftEl)
    generateForBlock(passwordRightEl)
}

function generateForBlock(element) {
    let passwordString = ""
    for (let i = 0; i < 15; i++) {
        if (numberToggle === false && symbolToggle === true) {
            let char = numbersOff[Math.floor(Math.random()* numbersOff.length)]
            passwordString += char[Math.floor(Math.random()* char.length)]
        } else if (numberToggle === false && symbolToggle === false) {
            passwordString += letters[Math.floor(Math.random()* letters.length)]
        } else if (symbolToggle === false) {
            let char = symbolsOff[Math.floor(Math.random()* symbolsOff.length)]
            passwordString += char[Math.floor(Math.random()* char.length)]
        } else {
            let char = characters[Math.floor(Math.random()* characters.length)]
            passwordString += char[Math.floor(Math.random()* char.length)]
        }
    }
    element.textContent = passwordString;
    copyPassword(element.textContent)
}

function copyPassword(text) {
    navigator.clipboard.writeText(text);
}





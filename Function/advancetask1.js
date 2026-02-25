// Create a function which has a parameter where we can send a word as parameter.
// And converts the first letter of word into upper case and Return New String.
let word = "ananya"

function  capitalize(word){

    let firstLetter = word.charAt(0).toUpperCase()
    let remainingLetters = word.slice(1)
    let newWord = firstLetter + remainingLetters
    return newWord

}
console.log(capitalize(word))
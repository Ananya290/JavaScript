// Create a dropdown with some options of fruits
// Read selected fruit store it in a variable and print value in console.


//Task1

function onSelectData(){
    let selectElement = document.getElementById("fruitSelect")
    let selectedValue = selectElement.value
    console.log("task1",selectedValue)
}


// Create a one textbox and provide value and id to it.
// Give the by default value to that textbox
// Read the value of the textbox by using getElementById and display value in alert box.

//Task2


    let inputElement = document.getElementById("inputField")
    let inputValue = inputElement.value
    console.log("task2 " + inputValue)
    // alert("task2 " + inputValue)


// Create 2 radio buttons with same name ="gender" value will be Male & female
// Read selected value and print it in console.
// Try in to write it in console directly rather than in script section
//task3




// Create a one dropdown for sports and create one textbox.
// Give default values for both.
// Give same class name for dropdown and textbox.
// And First stored the dropdown selected value in console and textbox value in alert.


// task4

// let dropdownELement = document.getElementById('sportsSelect').value
// let textElement = document.getElementById("sportsTextField").value

let  dropdownELement = document.getElementsByClassName('sportInput')[0].value
let textElement = document.getElementsByClassName('sportInput')[1].value

console.log(dropdownELement)
console.log(textElement)



// Create a one span and provide id.
// Write the anything under the span
// Read the value of the span by using getElementById and display that in confirm popup.


// task5
          

let element = document.getElementById('mySpan')?.innerText
console.log(element)



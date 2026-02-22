// Create 3 textboxes for entering three numbers
// Create a button "Analyze Numbers"
// Check if first > second > third (descending order)
// Check if all three are equal
// Check if they form an arithmetic progression
// Display results using console.log with detailed messages


function onClick(){
    first = document.getElementById("num1").value
    second = document.getElementById("num2").value
    third = document.getElementById("num3").value

    if(first > second && second > third){  
        console.log("Numbers are in descending order")
     }
     if(first == second && second == third){
        console.log("All numbers are equal")
     }
        if((second - first) == (third - second)){   
            console.log("Numbers form an arithmetic progression")
        }
    console.log(first)
    console.log(second)
    console.log(third)
}
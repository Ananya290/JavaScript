// Create textboxes for age, income, and credit score
// Use && and || operators to check loan eligibility:
// Age >= 21 AND Income >= 25000
// OR Credit Score >= 700
// Display: "Eligible for Loan" or "Not Eligible" in a strong tag


function onClick(){
    age = document.getElementById("age").value
    income= document.getElementById("income").value
    credirScore = document.getElementById("credit").value

    result = document.getElementById("result")

    if(age >=21 && income >= 25000 || credirScore >=700){
       result.innerHTML = "<strong>Eligible for Loan</strong>"
    }
    else{
        result.innerHTML = "<strong>Not Eligible for Loan</strong>"
    }
}
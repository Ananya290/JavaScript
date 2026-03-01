// create a texbox to Enter number
// create Button with name check -
// on btn click check if Entered no is even or odd
// Display result in strong tag beside button

function check(){
    var num = Number(document.getElementById("evenodd").value);
    var output = "";

    if ((num % 2) !== 0) {
        output = `${num} is odd Number`;
    } else {
        output = `${num} is even Number`;
    }

    document.getElementById("output").innerHTML = output;
}

// Task 2
// Create 3 textbox to provide integer values
// cerate a button - check max number
// on click of button - find max numbers and print it in p tag
// Num1
// 

function findmax(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var maxValue = Math.max(num1, num2, num3);

    document.getElementById("max").innerHTML = maxValue + " is a max number";
}


// Task 3
// Create 1 dropdown with Caste Options and One Other Option
// On dropdown Change if Other is selected show other textbox else hide

function handleCasteChange(event){
    var selectedValue = event.target.value;
    var otherInput = document.getElementById("selectedCaste");

    if (selectedValue === "other") {
        otherInput.style.display = "inline-block";
    } else {
        otherInput.style.display = "none";
        otherInput.value = "";
    }
}


// Task - BMI Calculator
// Create textboxes for weight (kg) and height (m)
// Calculate BMI: weight / (height × height)
// Determine category:
// BMI < 18.5: Underweight
// 18.5 <= BMI < 25: Normal
// 25 <= BMI < 30: Overweight
// BMI >= 30: Obese
// Display category with health recommendations

function BMIcalulation(){
    var h = Number(document.getElementById("height").value);
    var w = Number(document.getElementById("weight").value);
    var recommendation = "";

    if (h <= 0 || w <= 0) {
        document.getElementById("recommendation").innerHTML = "Please enter valid height and weight";
        return;
    }

    var BMI = w / (h * h);

    if (BMI < 18.5) {
        recommendation = "You are underweight. Recommendation: increase nutritious calories and consult a doctor.";
    } else if (BMI >= 18.5 && BMI < 25) {
        recommendation = "You are normal. Recommendation: maintain balanced diet and regular exercise.";
    } else if (BMI >= 25 && BMI < 30) {
        recommendation = "You are overweight. Recommendation: reduce sugar/fat intake and increase daily activity.";
    } else {
        recommendation = "You are obese. Recommendation: consult a healthcare professional and follow a weight-loss plan.";
    }

    document.getElementById("recommendation").innerHTML = recommendation;

}
// Task - Discount Eligibility
// Create textboxes for purchase amount and 
// customer type (regular/premium/vip)
// Apply discount logic:
// Regular: < 1000=5%,>= 1000 = 10%
// Premium: < 1000=10%,>= 1000 = 15%
// VIP: 20% always
// Calculate and display: Original Amount, Discount, Final Amount

function get(event){
    var purchaseamount = Number(document.getElementById("purchaseamount").value);
    var selectedvalue = document.getElementById("customerType").value;
    var discountPercent = 0;

    if (purchaseamount <= 0 || Number.isNaN(purchaseamount)) {
        document.getElementById("originalamount").innerHTML = "Original Amount: Invalid";
        document.getElementById("discount").innerHTML = "Discount: -";
        document.getElementById("finalAmount").innerHTML = "Final Amount: -";
        return;
    }

    document.getElementById("originalamount").innerHTML = purchaseamount;

    if (selectedvalue === "regular") {
        discountPercent = purchaseamount < 1000 ? 5 : 10;
    } else if (selectedvalue === "premium") {
        discountPercent = purchaseamount < 1000 ? 10 : 15;
    } else if (selectedvalue === "vip") {
        discountPercent = 20;
    }

    var finalAmount = purchaseamount - purchaseamount * (discountPercent / 100);

    document.getElementById("originalamount").innerHTML = "Original Amount: " + purchaseamount.toFixed(2);
    document.getElementById("discount").innerHTML = "Discount: " + discountPercent + "%";
    document.getElementById("finalAmount").innerHTML = "Final Amount: " + finalAmount.toFixed(2);
}


// Task - Time Period Identifier
// Create a textbox to enter hour (0-23)
// Identify time period:
// 0-5: Night
// 6-11: Morning
// 12-17: Afternoon
// 18-23: Evening
// Display appropriate greeting message with emoji 

function onValueChnage(){
    time = Number(document.getElementById("number").value)

    if( time > 0 && time < 5) {
        msg = "good night"
    }
    else   if( time > 6 && time < 11) {
        msg = "good morning"
    }
    else
          if( time > 12 && time < 17) {
        msg = "good afternoon"
    }
    else
          if( time > 18 && time < 23) {
        msg = "good evening"
    }

    document.getElementById("mssg").innerText = msg

}



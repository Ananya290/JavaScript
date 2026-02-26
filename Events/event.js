// Task 1 (Click Event)
// Create on button Click Me. 
// On the click on button showcase alert with text Hello Javascript

let event = document.getElementById("clickme")

function showalert(){
    console.log("hello Javascript")
}

// Take three textboxes.
// Do multiplication of textbox 1 and 2 and store the result in textbox 3.



function multiplication(){
    let textbox1 = document.getElementById("id1").value
let textbox2 = document.getElementById("id2").value
result = textbox1 * textbox2
document.getElementById("id3").value = result
}


// Take a one textbox and apply Keydown event in that textbox
// On the click on textbox you have to showcase alert box and show the message
// (You have pressed a key inside text input!)
 
function onenter(){
    let result = document.getElementById("event").value
    console.log(result)
}
 
// Task 4 (Change Event)
// Create a dropdown with options of fruits
// add on change event and show selected value in strong tag
 
function getelement(){
    let data = document.getElementById("fruits").value
    document.getElementById("result").innerText = data;
    console.log(data)
}
 
 
// Task 5 (Calculator)
 
function getelement(){
    let data = document.getElementById("fruits").value
    document.getElementById("result").innerText = data;
    console.log(data)
}
 
function add(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let result = num1 + num2
    document.getElementById('result').innerText = result
 
}
function divide(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let result = num1 / num2
    document.getElementById('result').innerText = result
 
}
function substract(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let result = num1 - num2
    document.getElementById('result').innerText = result
 
}
function multiply(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let result = num1 * num2
    document.getElementById('result').innerText = result
 
}
 
// Task 6 (Click Event)
// Take a three button click on button and show one alert
 
function check1(){
    console.log("button1")
}
function check2(){
    console.log("button2")
}
function check3(){
    console.log("button3")
}
 
 
 
function getAddress(){
    let plotNo = document.getElementById('plotno').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let pin = document.getElementById('pin').value;
 
    let final = plotNo+ " ," + city + "  " + state +  " " +pin
    document.getElementById("result").innerText = final
    document.getElementById('result').style.fontWeight = 'bold';
}
 
 
// Create one button Enable Count.
// Create one more button to Record Counts.
// On clicking the Record Count button, we need to count how many times the user has
//  clicked the button, but only when Enable Count is clicked.
 
isenable = false
let count = 0;
function  active(){
    isenable = !isenable
    if(!isenable){
        document.getElementById('btn').style.background ="orange"
    }
    else{
        document.getElementById('btn').style.background ="blue"
    }
}
 
function incresecount(){
   
    if(isenable){
 count++
 console.log(count)
 document.getElementById("countid").innerText = count
 document.getElementById("countid").style.background ='yellow'
 document.getElementById("countid").style.fontWeight = 'bold'
 
    }
    else{
        alert("Active is not enabled")
    }
}
 
 
//Task 2
// Create Unique Customer Id
// Create 4 Text fields to Enter First Name, Middle Name, Last Name, and Mobile No of Customer
// Create a button Generate Unique Id
// Unique Id => current Date day + First 2 Letters of First Name + Last 2 Letters of Last Name
//  + Last 4 Digits of Mobile No - separated by -
// On Change of each textbox, Unique Id should be created and displayed in a <p> tag below
 
 
 
 
function getData(){
var firstName= document.getElementById('firstName').value
var middleName= document.getElementById('middleName').value
var lastName= document.getElementById('lastName').value
var mobileNumber= document.getElementById('mobileNumber').value
    var date = new Date();
    var day = date.getDay();
    console.log(day)
   
    var first2Name = firstName.slice(0, 2);
    var last2Name = lastName.slice(-2);
    var mobile4Number = mobileNumber.slice(-4);
   
    var UniqueCustomerId = day + '-' + first2Name + '-' + last2Name + '-' + mobile4Number;
   
    console.log(UniqueCustomerId);
    document.getElementById('unique').innerText = UniqueCustomerId
    final = document.getElementById('unique')
    final.style.background = 'orange'
    final.style.color ='white'
}
 
// create a varibel store current date into it
// Add 2 Months into that day & add 6 days into date..then print new Date in <p> Tag
 
var today = new Date();
 
 
var currentMonth = today.getMonth();
today.setMonth(currentMonth + 2);
 
var currentDate = today.getDate();
today.setDate(currentDate + 6);
 
console.log(currentDate)
console.log(currentMonth)
 
document.getElementById('newDate').innerText = "New Date: " + today.toDateString();
 
 
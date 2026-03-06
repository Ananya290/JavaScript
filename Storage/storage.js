// Task 1
// Create 3 textbox to Enter First, Middle & last Names
// Create a Button "Save Data" - on click of it Save all name into localStorage into different Variables
// Create a button "Print Data" - read stored data from localStorage and print that in 3 labels

function save(){
    fName = document.getElementById("firstName").value
    mName = document.getElementById("middleName").value
    lName = document.getElementById("lastName").value
    localStorage.setItem('firstName',fName)
    localStorage.setItem('middleName',mName)
    localStorage.setItem('lastName',lName)
 

}

function print(){
fName = localStorage.getItem("firstName")
mName = localStorage.getItem("middleName")
lName = localStorage.getItem("lastName")
console.log(fName,mName,lName)
}

// Task 2
// Create Employee Form to store Data like Name, Address, City, Pin
// Create button to save data in localStorage
// On Reload set value reading from localStorage and assign it to all textbox

function saveData(){

let name = document.getElementById("name").value;
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;
let pin = document.getElementById("pin").value;

let employee = {
name: name,
address: address,
city: city,
pin: pin
};

localStorage.setItem("employeeData", JSON.stringify(employee));


}

window.onload = function(){

let data = localStorage.getItem("employeeData");

if(data){

let employee = JSON.parse(data);

document.getElementById("name").value = employee.name;
document.getElementById("address").value = employee.address;
document.getElementById("city").value = employee.city;
document.getElementById("pin").value = employee.pin;

}

}


// Task 3
// on add btn click Entered City Should be added to dropdown option
// after adding city - textbox Should be empty
// After Adding city - save array to Localstorage
// on Page Load Read City Array From localStorage and assign it to Dropdown
let city = [];

function addCity(){

let cityName = document.getElementById("citytask3").value;

city.push(cityName);


localStorage.setItem("cities", JSON.stringify(city));

displayCities();

reset();

}

function displayCities(){

let dropdown = document.getElementById("resultCity");

dropdown.innerHTML = "";

city.forEach(c => {

let option = document.createElement("option");
option.text = c;
option.value = c;

dropdown.appendChild(option);

});

}

function reset(){
document.getElementById("citytask3").value = "";
}

window.onload = function(){

let storedCities = localStorage.getItem("cities");

if(storedCities){

city = JSON.parse(storedCities);

displayCities();

}

}
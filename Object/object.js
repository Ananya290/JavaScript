// Task 1
// Create a Object to store Product information.
// Fields will be ProductName, Category, Price, Discount
// Print ProductName & Price in the console.

profuctInfo = {
 productName:"Mango",
 category:"fruits",
 price:100,
 discount:5
}

console.log(profuctInfo.productName) //static
console.log(profuctInfo['price']) //dynamic

// Task 2
// Create a Object to store Train Ticket information
// Fields will be TrainName, TrainNo, NoOfPassinger, From, To, DateOfJourney
// Print whole Information in
// the p tag like below
// ➡️ Traine Name: Vidarbah Express
// ➡️ Traine No: 12135
// ➡️ No Of Passinger : 3
// ➡️ From Location: Nagpur
// ➡️ To Location: Mumbai
// ➡️ Date Of Journey:
// 08-04-2023 05.00 PM


const trainTicketInformation = {
    TrainName: "Vidarbah Express",
    TrainNo: 12135,
    NoOfPassinger: 3,
    From: "Nagpur",
    To: "Mumbai",
    DateOfJourney: "08-04-2023 05.00 PM"
};

document.getElementById("task2").innerHTML = `
 Traine Name: ${trainTicketInformation.TrainName}<br>
Traine No: ${trainTicketInformation.TrainNo}<br>
 No Of Passinger : ${trainTicketInformation.NoOfPassinger}<br>
 From Location: ${trainTicketInformation.From}<br>
To Location: ${trainTicketInformation.To}<br>
Date Of Journey:${trainTicketInformation.DateOfJourney}<br>
`;





// Task 3
// Create one Object to Hold Information of School.
// Fields will be SchoolName, PrincipleName, ContactNo, and Address.
// Print whole Object in console
// after that add one more Field SchoolEmail with some email.
// Again print updated object.
 
school={
    SchoolName:"kv", PrincipleName:'vaishnavi', ContactNo:73952076527,  Address:"balrampur"
}
 
console.log(school)
 
 
// Task 4
// Create one Object to Hold SupportTicket data
// Properties will be TicketNo, CreatedBy, CreatedDate, AssigntoEmployeeName,
// TicketDescription.
// Keep AssigntoEmployeeName filed with empty value.
// Print a dropdown with Employee Name.
// ON Assign Button add selected employee name to AssigntoEmployeeName.
// Print Whole Object after assigning employee in Console.
 
SupportTicket={
    TicketNo:1234, CreatedBy:'12-04-2025', CreatedDate:'13-04-2026', AssigntoEmployeeName:"" ,TicketDescription:"Software negineer"
}
 
var t =''
function OnCHANGE(event){
    t = event.target.value
    console.log(t)
   
}
 
function clickkaro(){
 SupportTicket.AssigntoEmployeeName = t;
 console.log(SupportTicket)
}
 
 
// Create employee Object with fields name, contactNo, deptName, teamLeadName,technology
// Create a form for above fileds like below
// on Save Button - add values to perticular field from textbox
// on Print button - print whole object into p tag
// on clear button - empty value of all fields from object and print updated Object again
 
 
employee ={
    fieldsname:"a", contactNo:1, deptName:"ananya", teamLeadName:"aanan",technology:"asdsfd"
}
 
function resetEmployee(){
    employee.fieldsname ="",
    employee.contactNo ="",
    employee.deptName ="",
    employee.teamLeadName ="",
    employee.technology =""
}
 
function savekaro(){
    employee.fieldsname =document.getElementById("name").value,
    employee.contactNo =document.getElementById("conatct").value,
    employee.deptName =document.getElementById("dept").value,
    employee.teamLeadName =document.getElementById("teamlead").value,
    employee.technology =document.getElementById("tech").value
    console.log(employee)
}
 
function printEmp(){
    document.getElementById("display").innerText =
    `
    ${employee.fieldsname}
    ${employee.contactNo},
    ${employee.deptName},
    ${employee.teamLeadName},
    ${employee.teamLeadName}
 
 
    `
}
 
 
// Task - User Profile Manager
// Create object to store user profile:
// Basic info: firstName, lastName, email, phone
// Address: street, city, state, pincode
// Preferences: theme, language, notifications
// Create form with fields for each property
// Buttons: "Save Profile", "View Profile", "Update Field", "Clear All"
// Display profile in JSON format in console and formatted HTML
 
UserProfile ={
    firstName:"", lastName:"", email:"", phone:"", address:{
        street:"", city:"", state:"", pincode:""
    },Preferences:{
        theme:"", language:"", notifications:""
    }
}
 
 
function saveProfile(){
UserProfile.firstName = document.getElementById("firstName").value
UserProfile.lastName = document.getElementById("lastName").value
UserProfile.email = document.getElementById("email").value
UserProfile.phone = document.getElementById("phone").value
 
UserProfile.address.street = document.getElementById("street").value
UserProfile.address.city = document.getElementById("city").value
UserProfile.address.state = document.getElementById("state").value
UserProfile.address.pincode = document.getElementById("pincode").value
 
UserProfile.Preferences.theme = document.getElementById("theme").value
UserProfile.Preferences.language = document.getElementById("language").value
UserProfile.Preferences.notifications = document.getElementById("notifications").value
 
console.log(UserProfile)
}
 
function viewProfile(){
 
    document.getElementById("output").innerText = JSON.stringify(UserProfile)
 
}
 
function resetProfile(){
 
    UserProfile.firstName=""
    UserProfile.lastName=""
    UserProfile.email=""
    UserProfile.phone=""
   
    UserProfile.address.street=""
    UserProfile.address.city=""
    UserProfile.address.state=""
    UserProfile.address.pincode=""
   
    UserProfile.Preferences.theme=""
    UserProfile.Preferences.language=""
    UserProfile.Preferences.notifications=""
   
    }
function updateProfile(){
 
        UserProfile.firstName = document.getElementById("firstName").value
        UserProfile.lastName = document.getElementById("lastName").value
        UserProfile.email = document.getElementById("email").value
        UserProfile.phone = document.getElementById("phone").value
       
        UserProfile.address.street = document.getElementById("street").value
        UserProfile.address.city = document.getElementById("city").value
        UserProfile.address.state = document.getElementById("state").value
        UserProfile.address.pincode = document.getElementById("pincode").value
       
        UserProfile.Preferences.theme = document.getElementById("theme").value
        UserProfile.Preferences.language = document.getElementById("language").value
        UserProfile.Preferences.notifications = document.getElementById("notifications").value
       
        viewProfile()
       
        }
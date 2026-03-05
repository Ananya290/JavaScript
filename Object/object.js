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





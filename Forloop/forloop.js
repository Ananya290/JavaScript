// Write a logic to get Sum Of 10 numbers from 1-10.
// Print SUM in strong tag.
// Note : Use for loop to complete this task.
sum =0
for(let i = 0 ; i < 11 ; i++){
    sum = sum + i
   
    document.getElementById("sum").innerHTML = `<strong>${sum}</strong>`
console.log(sum)
 
}
 
// Create an Array of some numbers.
// Using for loop print even numbers only in console from the array.
 
arr = [1,2,3,4,5,6,7,8,9,0,10]
evn=[]
for(let i = 0 ; i < arr.length ; i++){
  if((arr[i]%2) == 0){
    evn.push(arr[i])
  }
}
console.log("even",evn)
 
// Create 2 array of integers
// Get sum of both numbers from array and print it in storng tag.
arr1 = [1,2,3,4,5,6,7,8,9,0,10]
arr2 = [10,20,30,40,5,6,7,8,9,0,10]
 
final = [...arr1 , ...arr2]
console.log(final)
let res = final.reduce((c,d) =>{
    return c+d
},0)
 
document.getElementById("task3").innerText= res
 
 
// Task 4
// Create an array of City Name and a droddown
// Now Using for Loop add dynamic options to a dropdwon in reverse order
// Example :
// var cityList = ["Pune","Nagpur","Thane","Mumbai"];
 
 
var cityList = ["Pune","Nagpur","Thane","Mumbai","shrawasti"];
var dropdown = document.getElementById("cityDropdown");
 
for (var i = cityList.length - 1; i >= 0; i--) {
    var option = document.createElement("option");
    option.text = cityList[i];
    option.value = cityList[i].toLowerCase();
    dropdown.add(option);
}
 
 
// Task 5
// Print the ODD numbers from 7 to 31
// Print no in ul li tag
var ul = document.getElementById("task5ul");
 
for(let i = 7; i <= 31; i++){
    if(i % 2 !== 0){          
        var li = document.createElement("li");
        li.textContent = i;  
        ul.append(li)          
    }
}
 
 
// Task 6
// Iterate through all numbers from 1 to 45.
// Print the following :
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
 
 
for(let i = 1; i <= 45; i++){
 if ( (i % 3)== 0){
    console.log("Fizz" , i)
 }if((i % 5)== 0){
    console.log("Bizz",i)
 
 }if((i % 3)== 0 && (i % 5)== 0 ){
    console.log("FizzBuzz",i)
 }
 
 
}
 
 
// Task - Prime Number Finder
// Create textboxes for start number and end number
// Create button "Find Primes"
// Loop through range and find all prime numbers
// Display primes in a ul li list with count
// Ex: 1 to 20 => 2, 3, 5, 7, 11, 13, 17, 19 (Total: 8)
 
 
 
 
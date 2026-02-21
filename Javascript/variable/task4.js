// Create 2 variable num1 assign value = 1122, num2 == 3344

num1 = 1122
num2 = 3344
// show both varible in alert popup
alert(num1)
alert(num2)
// after alert now replace value of num1 with num2 & num2 with num1

c = num1 + num2 
num1 = c-num1 
num2 = c-num2
// now show updated value in alert again
alert(num1)
alert(num2)

//can't we use here a concept of destructing


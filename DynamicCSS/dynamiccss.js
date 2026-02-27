// Task 1 - Dynamic Background Color
 
// Create a Div add id to that div.
// create 2 buttons - with text Red and Yellow
// on click of buttons add respective Red and Yellow background color to Created Div
 
 
function changeColor(event){
    var detail = event.target.innerHTML
    document.getElementById("div").style.backgroundColor = detail
 
    console.log(document.getElementById("div").style.backgroundColor)
}
 
// Task 2 - div with
// dynamic css
 
// Create a Div add id to that div.
// create textbox for height, width, color, background color, font-size, border-radius
// creat a button with text Add Css read value from textboxs and add it to div
// Read value from textboxs and add it to div
 
function change(){
    var height = document.getElementById("height").value
    var width = document.getElementById("width").value
    var color = document.getElementById("color").value
    var backgroundcolor = document.getElementById("backgroundcolor").value
    var fontsize = document.getElementById("fontsize").value
    var raduis = document.getElementById("raduis").value
console.log(height,width,color,backgroundcolor,fontsize,raduis)
    var div2 = document.getElementById("div2")
    div2.style.height = height+ "px";
    div2.style.width = width+ "px";
    div2.style.color = color;
    div2.style.backgroundColor = backgroundcolor;
    div2.style.fontsize = fontsize + "px";
    div2.style.raduis = raduis;
 
}
 
 
// create a paragraph with some text
// if user hover mouse on paragraph add red color to p tag
// if user remove mouse from paragraph add black color to p tag
 
function mouseover(){
  document.getElementById("paragraph").style.color="red"
}
 
function mouseleave(){
    document.getElementById("paragraph").style.color="black"
 
}
 
// Task 4 - boostrap Progress Bar
 
// Create Bootstrap progress bar
// create a textbox if user enter % value progress bar shoud be dyanmic
// use onKeyDown event on texbox
 
function onChange(){
    document.getElementById("progressbar").style.width = document.getElementById("progressbarinput").value + "%"
}
// Create textboxes for marks in 3 subjects
// Calculate average: (marks1 + marks2 + marks3) / 3
// Determine grade using operators:
// Average >= 90: A+
// Average >= 80: A
// Average >= 70: B
// Average >= 60: C
// Otherwise: F
// Display grade with color coding in a paragraph


result = document.getElementById("result")
function onClick(){
mark1= Number(document.getElementById("mark1").value)
mark2= Number(document.getElementById("mark2").value)
mark3= Number(document.getElementById("mark3").value)

average = (mark1 + mark2 + mark3) / 3
console.log(average)
    if(average >= 90){
   result.innerHTML =  "<strong>A+</strong>"
   result.style.color ="green"
}else
    if(average >= 80){
   result.innerHTML = "<strong>A</strong>"
   result.style.color ="blue"
}
else
    if(average >= 70){
   result.innerHTML = "<strong>B</strong>"
   result.style.color ="yellow"
}else
    if(average >= 60){
   result.innerHTML = "<strong>C</strong>"
   result.style.color ="orange"
}
else{
    result.innerHTML ="<strong>F</strong>"
    result.style.color ="red"
}
}







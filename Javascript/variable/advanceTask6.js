// create a textarea Where User will Neter Some Sentence
// Create a textbox with placeholder "Replace word" , create 2nd textbox with placeholder "Replace with"
// Create a button "Replace"
// On Click of Replace - you need to replace word you enter in 1st textbox with word u enter with 2nd
//  textbox in Sentence from textarea and Print that newly Created Sentences into <p> tag

function click(){
    document.getElementById('replaceword').innerHTML = document.getElementById('replaceWith').innerHTML
    p =  document.getElementById('replaceword').innerHTML ;
    console.log(p)
}
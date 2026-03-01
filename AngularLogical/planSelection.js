function onbuttonSelect(value){

    if(value == 'mobile'){
        f = " welcome to mobile"
    }
    else 
          if(value == 'jioFibre'){
        f = " welcome to jiofibre"
    }else
             if(value == 'business'){
        f = " welcome to busines"
    }  
    document.getElementById("massage").innerHTML = f
}

// Plan Selection
// JavaScript, Angular, Reactjs
// On Continue Show Selected Plan
// If No Plan Selected Ask to select Plan
// On Reset - Remove Selected Plan & Hide Plan Div
// Select Plan
// Mobile Plan

// Fibre Optics

// Broadband

// Business

// Selected Plan : ....

function onvalueSelect(event){
    v = event.target.value
    console.log(v)

}
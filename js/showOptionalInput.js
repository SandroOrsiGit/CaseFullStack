"use strict";

let optioneleInput = document.getElementById('optioneleInput')
let cart = document.getElementById('cart')
let truck = document.getElementById('truck')
function checkInput(){
    if(cart.checked==true){
    optioneleInput.classList.remove('hidden');

    
    }
    if(truck.checked==true){
        optioneleInput.classList.add('hidden')
    }
}
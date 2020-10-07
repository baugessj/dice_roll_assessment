let dieRolls = [];
let rollButton = document.querySelector('#roll_button');
let inputField = document.querySelector('#dice_input');
let showRolls = document.querySelector('#show_rolls')
let total = document.querySelector('#total_field')
let reset = document.querySelector('#reset')

rollButton.addEventListener("click", function(){
    let numberOfDice = inputField.value;
    let count = 0;
    dieRolls = [];

    while (count < numberOfDice){
        
        dieRolls.push(Math.floor(Math.random() * 6 + 1))
        count++;
        console.log(dieRolls);
        
    };
    var sum = 0;
    for (var i = 0; i < dieRolls.length; i++){
        sum += dieRolls[i]
        total.innerHTML = sum
    }
})

showRolls.addEventListener("click", function(){
    window.alert(dieRolls);

})

reset.addEventListener("click", function(){
    total.innerHTML = "";
    inputField.value = "";
    dieRolls = [];
})


let action_result_button = document.getElementById ('action_result');
let number1_input_field = document.getElementById ('number1');
let number2_input_field = document.getElementById ('number2');
let result_content = document.getElementById ('result');

action_result_button = document.addEventListener('click', function (){
    let value1 = parseFloat(number1_input_field.value);
    let value2 = parseFloat(number2_input_field.value);
    let result = mult(value1,value2);
    result_content.innerText = result;
});

function mult(a, b){
    return a * b;
}
 

function sum(a, b) {
    return a + b;
}
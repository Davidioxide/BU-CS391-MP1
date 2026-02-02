let first = document.getElementById("first");
let second = document.getElementById("second");
let result = document.getElementById("result");
let output;

const display = function(output){
    result.innerHTML = output;
    if(output < 0){
        result.style.color = "red";
    }else{
        result.style.color = "black";
    }
}
const plus = function(){
    output = Number(first.value) + Number(second.value);
    display(output);
}
const minus = function(){
    output = Number(first.value) - Number(second.value);
    display(output);
}
const times = function(){
    output = Number(first.value) * Number(second.value);
    display(output);
}
const divide = function(){
    output = Number(first.value) / Number(second.value);
    display(output);
}
const power = function(){
    output = 1;
    for(let i = 1;i <= Number(second.value);i++){
        output = output * Number(first.value);
    }
    display(output);
}
const cclear = function(){
    first.value = "";
    second.value = "";
    result.innerHTML = "";
}
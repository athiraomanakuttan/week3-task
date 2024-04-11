document.getElementById("submitForm").addEventListener('submit',function(e){
    e.preventDefault()
let result =document.getElementById("result");
let number1 =document.getElementById("numberOne").value;
let number2 =document.getElementById("numberTwo").value;
let sum= Number(number1)+Number(number2)
result.innerHTML="Result " +sum

});
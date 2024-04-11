document.getElementById("submitForm").addEventListener('submit',function(e){
    e.preventDefault()
let result =document.getElementById("result");
let pAmount =document.getElementById("pAmount").value;
let iRate =document.getElementById("iRate").value;
let years =document.getElementById("years").value;
let SI=((pAmount*iRate*years)/100)

result.innerHTML="Result " +SI

});
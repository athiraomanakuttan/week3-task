document.getElementById("submitForm").addEventListener('submit',function(e){
    e.preventDefault()
let char =document.getElementById("charecter").value;
console.log("You have entered "+char)
});


document.getElementById("submitForm").addEventListener('submit',function(e){
    e.preventDefault()
let result =document.getElementById("result");
const mark=Number(document.getElementById("mark").value);
let grade;
console.log("Your mark is " + mark)
switch(Math.round(mark/10))
{
    case(10):
    case(9): grade='A Grade';
            break;
    case(8): grade='B Grade';
            break;
    case(7): grade='c Grade';
            break;
    case(6): grade='D Grade';
            break;  
    case(5): grade='E Grade';
            break;  
    default:
        grade='Sorry failed '
}

result.innerHTML="Result : " + grade

});
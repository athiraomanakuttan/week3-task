

document.getElementById("submitForm").addEventListener('submit',function(e){
    e.preventDefault()
let result =document.getElementById("result");
const number=Number(document.getElementById("number").value);
let day;
switch(number)
{
    case(1): day='Sunday';
            break;
    case(2): day='Monday';
            break;
    case(3): day='Tuesday';
            break;
    case(4): day='Wednesday';
            break;  
    case(5): day='Thursday';
            break;
    case(6): day='Friday';
            break; 
    case(7): day='Saturday';
            break; 
              
    default:
        day='Invalid entry'
}

result.innerHTML="Result : It's a " + day

});
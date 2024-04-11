document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let resultBox = document.getElementById('result');
    let number1 =Number(document.getElementById('number1').value)
    let number2 = Number(document.getElementById('number2').value)
    let operation= document.getElementById('menu-options').value
    switch(operation){
        case'addition': resultBox.innerHTML="The sum is :"+addition(number1,number2);
                        break;
        case'subtraction': resultBox.innerHTML="The result is :"+subtraction(number1,number2);
                        break;
        case'multiplication': resultBox.innerHTML="The sum is :"+multiplication(number1,number2);
                        break;
        case'division': resultBox.innerHTML="The sum is :"+division(number1,number2);
                        break;
        case 'exit':resultBox.innerHTML="You are exited! Thank you !";
                        break;

    }
    resultBox.innerHTML = "The array you entered : " + arr1 ;
    let sortedArray=arr1.sort().reverse()
    resultBox.innerHTML+="<br><br> The array after sorting in decending order :  " +sortedArray
})
function addition(num1,num2)
{
    return num1+num2;
}
function subtraction(num1,num2)
{
    return num1-num2;
}
function multiplication(num1,num2)
{
    return num1*num2;
}
function division(num1,num2)
{
    return num1/num2;
}
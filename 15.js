document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let arrayLimit = document.getElementById('arrayLimit').value;
    
    displayArray(getArray(arrayLimit));
    
    
})
function getArray(arrayLimit)
{
    let arr1=[]
    for(i=0; i<arrayLimit; i++)
    {
        arr1.push(prompt("enter the "+(i+1)+"th element"));
    }
    return arr1;
}
function displayArray(arr1)
{
    let resultBox = document.getElementById('result').innerHTML='The Enterd array is :' +arr1
}
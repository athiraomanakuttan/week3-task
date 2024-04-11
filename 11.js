document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let arrayLimit = document.getElementById('arrayLimit').value;
    let resultBox = document.getElementById('result')
    const arr1 = window.prompt("Enter " + arrayLimit + " elements of first array (Coma seperated)").split(',');
    resultBox.innerHTML = "The array you entered : " + arr1 ;
    let count=arr1.filter((value)=>value%2===0).reduce((counter,value)=>counter+1,0)
    resultBox.innerHTML+="<br> Number of even numbers in the given array is  " +count
})



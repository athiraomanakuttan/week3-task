document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let arrayLimit = document.getElementById('arrayLimit').value;
    let resultBox = document.getElementById('result')
    const arr1 = window.prompt("Enter " + arrayLimit + " elements of first array (Coma seperated)").split(',');
    const outputArray=[]
    for(i=0; i<arrayLimit-1; i++)
        outputArray.push(arr1[i]*arr1[i+1])

    resultBox.innerHTML = "The array you entered : " + arr1 ;
    resultBox.innerHTML+="<br><br>Output :  " +outputArray
})
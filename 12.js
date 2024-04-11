document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let arrayLimit = document.getElementById('arrayLimit').value;
    let resultBox = document.getElementById('result')
    const arr1 = window.prompt("Enter " + arrayLimit + " elements of first array (Coma seperated)").split(',');
    resultBox.innerHTML = "The array you entered : " + arr1 ;
    let sortedArray=arr1.sort().reverse()
    resultBox.innerHTML+="<br><br> The array after sorting in decending order :  " +sortedArray
})
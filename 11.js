document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let arrayLimit = document.getElementById('arrayLimit').value;
    let resultBox = document.getElementById('result')
    const arr1 = window.prompt("Enter " + arrayLimit + " elements of first array (Coma seperated)").split(',');
    const arr2 = window.prompt("Enter " + arrayLimit + " elements of first array (Coma seperated)").split(',');
    resultBox.innerHTML = "<p> before swap <br> <br> array1 : " + arr1 + "</p>";
    resultBox.innerHTML += "<p> array2 : " + arr2 + "</p>";
    for (var i = 0; i < arrayLimit; i++) {
        let temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }
    resultBox.innerHTML += "<p> After swap <br> <br> array1 : " + arr1 + "</p>";
    resultBox.innerHTML += "<p> array2 : " + arr2 + "</p>";
})



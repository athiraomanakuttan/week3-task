document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let inputWord = String(document.getElementById('word').value);
    let resultBox = document.getElementById('result')

    let reversedInput = inputWord.split("").reverse().join("")
    if (reversedInput === inputWord)
        resultBox.innerHTML = "Entered string is a palindrome";
    else
        resultBox.innerHTML = "Entered string is Not a palindrome";
})
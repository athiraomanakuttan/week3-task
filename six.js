

document.getElementById("submitForm").addEventListener('submit', function (e) {
    e.preventDefault()
    let examResult;
    let result = document.getElementById("result");
    const mark = Number(document.getElementById("mark").value);
    if (mark > 100)
        examResult = "Invalid input"
    else if (mark > 50)
        examResult = "passed the exam"
    else
        examResult="Sorry failed"


    result.innerHTML = "Result : " + examResult

});
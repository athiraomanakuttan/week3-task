
document.getElementById("submitForm").addEventListener('submit', function (e) {
    e.preventDefault()
    let examResult;
    let resultBox = document.getElementById("result");
    const number = Number(document.getElementById("number").value);
    for(var i=1; i<=10; i++)
    {
        var row ="<p>"+ i +" + "+ number +" = "+ (i*number) + "</p>";
        resultBox.innerHTML+=row;
    }

    

});
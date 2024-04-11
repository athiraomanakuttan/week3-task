document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let inputNumber = document.getElementById('number').value;
    let resultBox = document.getElementById('result')
    let flag=0;
    for(i=2; i<inputNumber; i++)
    {
        if(inputNumber%i===0)
        {
            resultBox.innerHTML="The number is not Prime";
            flag=1;
        }
    }
    if(flag===0)
    {
        resultBox.innerHTML="The number is Prime";
    }
})
document.getElementById("submitForm").addEventListener('submit', function (e) {
    e.preventDefault()
    
    let Result=0;
    let resultBox = document.getElementById("result");
    const number = Number(document.getElementById("number").value);
    
    for(var i=1; i<=number; i+=2)
    {
        Result+=i;
        console.log(i);
    }
    
    resultBox.innerHTML= "The sum is : "+Result
});
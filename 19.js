document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let annualIncome = document.getElementById('annualIncome').value;
    let resultBox = document.getElementById('result')
    if(annualIncome<=250000)
        incomeTaxAmount=0;
    else if(annualIncome>250000 && annualIncome<=500000)
        incomeTaxAmount=annualIncome*5/100;
    else if(annualIncome>500000 && annualIncome<=1000000)
        incomeTaxAmount=annualIncome*20/100;
    else if(annualIncome>1000000 && annualIncome<=5000000)
        incomeTaxAmount=annualIncome*30/100;
   
    resultBox.innerHTML="Your Income tax amount = " +incomeTaxAmount
})
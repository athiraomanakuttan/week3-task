document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let resultBox = document.getElementById('result')
    
    let writtenTest = document.getElementById('writtenTest').value;
    
    let labExam = document.getElementById('labExam').value;
    
    let Assignments = document.getElementById('Assignments').value;

    const  grade = (writtenTest*70)/100 + (labExam*20)/100 + (Assignments*10)/100;

    resultBox.innerHTML ="Your grade is " + grade;
    
})



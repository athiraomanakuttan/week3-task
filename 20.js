
let resultBox = document.getElementById("result");
let output=''
let row,count=1
for(var i=1; i<=4;i++)
{
    row="<h6>"
    for(var j=1; j<=i; j++){
        row+=count + " "
        count++;
    }
    row+="</h6>"
    output+=row;
}
resultBox.innerHTML=output
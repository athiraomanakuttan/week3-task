
let resultBox = document.getElementById("result");
let output=''
let row
for(var i=1; i<=5;i++)
{
     row="<h6>"
    for(var j=1; j<=i; j++)
    {
        row+=j + " "
    }
    row+="</h6>"
    
    output+=row;
    

}
resultBox.innerHTML=output
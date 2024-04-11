const my_string='123456';
try{
    let revStr = my_string.split("").reverse().join();
    console.log("The reversed string is " + revStr);
}
catch(err)
{
console.log(err)
}
finally{
    console.log("the type of  my_string is "+typeof my_string)
}
function myFilter(myArray,callback){
    let sum =myArray.reduce((sum,current)=>sum+=current,0)
    console.log("The sum is "+sum);
    console.log(callback(sum));
}

let arr=[1,2,3,4,5,1]
myFilter(arr,(sum)=>{return sum%2==0})
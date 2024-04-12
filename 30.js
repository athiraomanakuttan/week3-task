// array even number sum

function calculateSum(arr)
{
	return new Promise((resolve,reject)=>{
	let sum=arr.filter((element)=> element%2===0).reduce((total,curr)=>total+=curr,0)
	if(sum>=0)
	return resolve(sum)
	else
	return reject("Something went wrong")

})
}
const arr=[10,21,5,4,6]
let sum =calculateSum(arr).then((result)=>console.log(`the sum is ${result}`)).catch((error)=>console.log(error));
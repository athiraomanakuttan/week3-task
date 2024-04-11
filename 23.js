class firstClass
{
     getArray(rows, cols) {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                let value = prompt(`Enter value for row ${i + 1}, column ${j + 1}:`);
                row.push(parseFloat(value));
            }
            arr.push(row);
        }
        return arr;
    }
    addArray(arr1, arr2) {
        let sumArray = [];
        for (let i = 0; i < arr1.length; i++) {
            let row = [];
            for (let j = 0; j < arr1[i].length; j++) {
                row.push(arr1[i][j] + arr2[i][j]);
            }
            sumArray.push(row);
        }
        return sumArray;
    }
}
class displayClass{
    displayArray(arr1, arr2, sumArray) {
        console.log("First array:");
        console.log(arr1);
        console.log("Second array:");
        console.log(arr2);
        console.log("Sum array:");
        console.log(sumArray);
    }
}
let obj1 =new firstClass();
let obj2 = new displayClass()
let rows = parseInt(prompt("Enter the number of rows:"));
let cols = parseInt(prompt("Enter the number of columns:"));

console.log("Enter values for the first array:");
let arr1 =obj1.getArray(rows, cols);

console.log("Enter values for the second array:");
let arr2 = obj1.getArray(rows, cols);
let sumArray = obj1.addArray(arr1, arr2);
obj2.displayArray(arr1,arr2,sumArray)


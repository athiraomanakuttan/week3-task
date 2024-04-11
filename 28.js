function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}
function displayResult(obj)
{
    console.log(`The car is ${obj.name}, mileage is  ${obj.mileage} and maximum speed is   ${obj.max_speed}`)
}
let obj = new Car("alto",60,80)
displayResult(obj);
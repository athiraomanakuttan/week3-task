class MyClass{
    circle(){
        const radious=prompt("Enter the radious of the circel");
        let result=(Math.PI*radious*radious).toFixed(2)
        this.displayResult(result,"circle")
    }
    square(){
        const a=prompt("Enter the length of the squre");
        let result=a*a
        this.displayResult(result,"Squre")
    }
    rectangle(){
        const length=prompt("Enter the length of the rectangle");
        const width=prompt("Enter the width of the rectangle");
        let result=length*width
        this.displayResult(result,"rectangle")

    }
    triangle(){
        const base=prompt("Enter the base of the Triangle");
        const height=prompt("Enter the height of the Triangle");
        let result=0.5*(base*height)
        this.displayResult(result,"Triangle")

    }
    exit()
    {
        alert("Exited! Thank you")
    }
    displayResult(result,option)
    {
        alert("Area of the "+ option +" is: "+ result)
    }
}

class Area extends MyClass{
    main(){
        let option=Number(prompt("choose a option \n 1. circle \n 2. square \n 3. rectangle \n 4. triangle \n 5. exit "))
        switch(option){
            case 1: this.circle();
                    break;
            case 2: this.square();
                    break;
            case 3: this.rectangle();
                    break;
            case 4: this.triangle();
                    break;
            case 5: this.exit();
                    break;
        }
    }
}
let object1 =new Area()
object1.main();
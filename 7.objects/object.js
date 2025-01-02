

// define object

let car ={
    color: 'black',
    model:'231'
}


// accesign the object prop
// one way
car.color 
car.model
//second way
car['color']
car['model']


// another way
let propertyname = 'color';

car[propertyname]




//// Modify

car.color = 'brown';
 


// delete property

delete car.model // this always return true

let returnvalue = delete car.model
console.log(returnvalue) // true
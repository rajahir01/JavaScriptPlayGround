
// 'this' represents the object

let person ={
    firstName:'Harry',
    lastName:'Brook',
    city:'Delhi',
    getSummary: function (){
        return `${this.firstName} and ${this.lastName} lives in ${this.city} `
        // if you just return this , for example
        // return this; // in output you will get everything including getSummary function
    }
}

console.log(person.getSummary())

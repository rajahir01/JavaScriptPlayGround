// Passing function as an arg
// Optimized way to do things

let UpperCase = function(str){
    return str.toUpperCase();
}

let LoweCase = function(str){
    return str.toLowerCase();   
}

let transformer = function(str, fun){
    return fun(str)
}

console.log(transformer('hello', UpperCase))
console.log(transformer('HELLO', LoweCase))



// function returning another function
// 1st method
let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
}

console.log(compliment('you')('code?'))


// we call higher order function when function is getting passed as arg
// and when function is returning function itself

// function declartion

function FN(){
    console.log('name of the function be cleared');
}

// function call
FN()

// Function Expression
// recommended
let fun = function(){
    console.log('name of the function be cleared');
}


// calling the function expression

fun()



// function parameter

let invitation = function(name = 'john'){
    console.log(`welcome ${name} you are invited!`);
}

invitation('marian')
invitation()


// return the value from a function

let ageCalc = function( birthyear, currentyear= 2023){
    let result = currentyear - birthyear;
    return result;
}
ageCalc(2005)

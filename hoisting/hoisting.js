

// variable declaration are hoisted toward top of their scope



/////////////////////////////////
test = 10;
console.log(test)
var test;


// OP-> 10
// bcoz var is defined at top of scope
// when using let and const it wont work

///////////////////////////////


// function declaration
test()
function test(){
    console.log('hhe there')
}


// will not work same in fucntion expression and arrow function
test()
let test = function(){
    console.log('hello world!')
}
// will throw error


test()
let test =  ()=>{
    console.log('check ')
}
// will throw error
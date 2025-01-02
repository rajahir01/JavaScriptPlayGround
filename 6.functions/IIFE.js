
// IMMEDIATE INVOKED FUNCTION EXPRESSION
// EXECUTED ONLY ONCE

function (){
    console.log("this will never execute")
}
// this will never execute 
// but if we make this as expression by adding parenthese

(function(){
    console.log("this will never execute")
})()


// with arg

(function(name){
    console.log("this will never execute")
})('iife')

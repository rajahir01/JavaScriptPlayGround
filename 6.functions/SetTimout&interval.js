



// setTimeOut(func|code , delay, arg1, arg2, ...)

function greeting(){
    console.log('welcome to coder ')
}
// 5000 millisecond meaning 5 sec
setTimeout(greeting, 5000)


// another way to use it

setTimeout(function greetings(name){
    console.log(`${name} hello world!`);
}, 3000, 'raj')




// setInterval(func|code, delay, arg1, arg2)

setInterval(greeting, 1000) // infinity run every 1 second

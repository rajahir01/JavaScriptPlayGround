// finding index of a char 

let fullname = 'raj';
console.log(fullname.indexOf('a')); // same firstIndexOf
// OP-> 1
// firstIndexof- find first index of 
// lastindexOf- find last index of

// trim method- remove unwanted space
// case sensitive
let checkspace = '     hi         hello       bye';
let result = checkspace.trim();
//OP-> 'hi hello bye'




// include method- check if is there

checkspace.includes('hi');


// slice method - find the chunk the string
let slicestring = 'rajahirwar'
console.log(slicestring.slice(0,5)) // give 0 to 4 index string only
//OP->  rajah


// String are immutable(cant modify)

// Split Method

let colours = 'black brown blue';
let arrcolor = colours.split(' '); // split by space
//OP-> ['black', 'brown', 'blue']

//another example
let colours1 = 'black,brown,blue';
let arrcolor1 = colours1.split(',');


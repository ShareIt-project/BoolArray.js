var BoolArray = require('./BoolArray.js').BoolArray;

console.log("*** empty ***");

var empty = new BoolArray();
console.log(empty);

console.log("*** ba1 ***");

var ba1 = new BoolArray(1);
console.log(ba1);

ba1.set(0, true);
console.log(ba1);

ba1.set(0, false);
console.log(ba1);

ba1.set(0, 1);
console.log(ba1);

ba1.set(0, 0);
console.log(ba1);

//ba1.set(1, true);
//console.log(ba1);

console.log("*** ba2 ***");

var ba2 = new BoolArray(2);
console.log(ba2);

ba2.set(0, true);
console.log(ba2);

ba2.set(1, true);
console.log(ba2);

ba2.set(0, false);
console.log(ba2);

ba2.set(1, false);
console.log(ba2);

console.log("*** ba8 ***");

var ba8 = new BoolArray(8);
console.log(ba1);

ba8.set(7, true);
console.log(ba8);

ba8.set(7, false);
console.log(ba8);

console.log("*** ba9 ***");

var ba9 = new BoolArray(9);
console.log(ba9);
console.log('ba9.length='+ba9.length);

ba9.set(8, true);
console.log(ba9);

console.log('0 -> '+ba9.get(0));
console.log('1 -> '+ba9.get(1));
console.log('2 -> '+ba9.get(2));
console.log('3 -> '+ba9.get(3));
console.log('4 -> '+ba9.get(4));
console.log('5 -> '+ba9.get(5));
console.log('6 -> '+ba9.get(6));
console.log('7 -> '+ba9.get(7));
console.log('8 -> '+ba9.get(8));
//console.log('9 -> '+ba9.get(9));

ba9.set(8, false);
console.log(ba9);
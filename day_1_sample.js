/*function getMonthName(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number";
    }

    return monthName;
}

// Example usage:
const monthNumber = 5; //input
console.log(getMonthName(monthNumber)); // Output

*/



/*
if (false){
    console.log("hi");     // This block will not execute because the condition is false
}
else{
    // This block will execute because the condition is false
    console.log("hello");  // Output: hello
console.log("hi5");  // Output: hi5
} */



/*
for(;;){
    console.log("1") //output: Infinite 1
}*/
/*
let count = 0;
for (;;) {
    console.log("1");
    count++;
    if (count >= 5) { // Break the loop after 5 iterations
        break;
    }
}*/



/*
let a=1
for(console.log('a');a<=4;console.log('b')){//for(i=10;i<=100;i++)
    console.log('c')
    a++
}*/
//op:a c b c b c b c b


/*
//let a=1
for(let a=1;a<100;a++)
console.log("hi");
console.log(a); // This line will throw an error because a is not defined outside the loop
//op error
*/
//op: hi 99 times



/*
let a = 1;
while (a <= 3) { // or while(){
    console.log(a);
    a++;
}*/
//op: 1 2 3 



/*
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 3);
*/



/*
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
console.log(add(5, 3)); // Output: 8
*/




/*
function sayHello() {
    return "Hello, World!"; // Returns a greeting message
}
console.log(sayHello()); // Output: Hello, World!
*/




/*
//normal function 
function a(){
    console.log("hello")
}
a();

//Arrow function
const b = () => {
    console.log("hello");
};
b(); // Output: hello
*/





/*
let apple=()=> console.log("hello");
apple()

let orange=()=> "orange";
console.log(orange())

let banana =() =>{
    console.log("Stark");
    return 3+3;
}
console.log(banana());
*/



/*
//spread operator //denoted by ' ... '

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let b = [...a1, ...a2];
console.log(b); 
//Output: [1, 2, 3, 4, 5, 6]

let a=[1,2,3];
let b1 =a
b1[2]=10;
console.log(a);
//op:[1,2,10]
*/






/*
var c=10;
function x(){
    c=20;
    console.log(c); //op:20
}
x();
function y(){
    c=10;
console.log(c);  //op:10
}
y();
*/


/*
const numbers = [1, 2, 3];

// Destructuring the array
const [first, second, third] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
*/


let a=[1,2,3,4,5,6]
let [b,...y]=a;
console.log(y) //op:  







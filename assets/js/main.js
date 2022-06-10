let average = 1500;
let person = prompt("please enter your payment amount");

if(person < average) {
    alert("your payment is lower than average");
}
if(person == average) {                                    // task 1
    alert("your payment is average");
}
if(person > average) {
    alert("your payment is more than average")
}




var firstArray = [
    ["Tom", 25,false],                                    // task 2
    ["bill", 38,true],
    ["Alice",23,false]
]


var first;                                               
var second;
var third;

first = firstArray [0][2];                               // მეორე მეთოდი
second = firstArray [1][1];
third = firstArray [2][2];

console.log( first + " " + second + " " + third)
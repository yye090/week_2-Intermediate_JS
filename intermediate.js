/*
Uppercase the first character
Write a function ucFirst(str) that returns the string str with the capitalized first character, for instance:
	ucFirst("john") == "John";


function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1); //while it works with an extra comma, probably better to leave it out
}
console.log(ucFirst("jack"));
*/

// const e = require("express");




/*
Truncate the text
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"


function truncate(str,maxlength){
    return console.log(str.length > maxlength? str.slice(0,19) +"...": str); //the 19 on this line is actually hardcoding the maxlength
}
truncate("What I'd like to tell on this topic is:", 25); //so changing the number here has no difference on where the string is truncated
truncate("Hi everyone!", 20)
*/

/*
Array operations
Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

let array1 = ["Jazz","Blues"];
console.log(array1)
array1.push("Rock-n-Roll");
console.log(array1)
array1[parseInt((array1.length)/2)]="Classics";
console.log(array1)
array1.shift();
console.log(array1)
array1.unshift("Rap","Reggae")
console.log(array1)
*/

/*
Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


function camelize(str){ //this function doesn't make the character after the dash uppercase (eg. backgroundColor). how could you change it to do this?
    let newstr = ""
    for (char of str){
        char === "-"? newstr+= "": newstr+=char;
    }
    return console.log(newstr)
}
camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")
*/

/*
Extendable calculator
*/
// class Calculator {
//     calculate(str){
//         let operations = []
//         let inputArray = str.split(" ");
//         switch (inputArray[1]){
//             case "*":
//                 return parseInt(inputArray[0]) * parseInt(inputArray[2]);
//             case "-":
//                 return parseInt(inputArray[0]) - parseInt(inputArray[2]);
//             case "**":
//                 return parseInt(inputArray[0]) ** parseInt(inputArray[2]);
//             case "+":
//                 return parseInt(inputArray[0]) + parseInt(inputArray[2]);
//             case "/":
//                 return parseInt(inputArray[0]) / parseInt(inputArray[2]);
//             case "%":
//                 return parseInt(inputArray[0]) % parseInt(inputArray[2]);
//         }
//     }
//     addMethod(name, func){
//         switch (name){
//             case "*":
//                 Calculator.calculate
//         }

//     }
    
// }

/*
class Calculator {
    constructor() {
        this.operation ={};
    }
    calculate(str) {
        let inputArray = str.split(" ");
        for (let element in this.operation){
            if (element === inputArray[1]){
                return this.operation[element](parseInt(inputArray[0]),parseInt(inputArray[2]));
            }
        }
    }
    addMethod(name,func){
        this.operation[name] = func;
        
    }
}

// let calc = new Calculator();

// console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("%", (a, b) => a % b);
let result = powerCalc.calculate("2 ** 3");
console.log(result)
let result1 = powerCalc.calculate("2 - 3");
console.log(result1)
let result2 = powerCalc.calculate("2 * 3");
console.log(result2)
let result3 = powerCalc.calculate("2 + 3");
console.log(result3)
let result4 = powerCalc.calculate("6 / 3");
console.log(result4)
let result5 = powerCalc.calculate("6 % 3");
console.log(result5)

*/

/*
Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr){
    let uniquelist = Array.from(new Set(arr))
    return uniquelist;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values))

*/

/*
Iterable keys
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?



let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys); // name, more*/



/* Sum the properties
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.


 function sumSalaries(obj){
    let currentsum = 0;
    if (Object.values(obj).length <1){
        return currentsum;
    }
    for (element of Object.values(obj)){
        currentsum+=element;
    }
    return currentsum;

}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log(sumSalaries(salaries)); // 650*/

/* Top salary
Create the function topSalary(salaries) that returns the name of the top-paid person.
If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs

function topSalary(salaries){
    let salArray = Object.values(salaries)
    let currnum =0;
    let empname = ""
    if (salArray.length <1){
        return null;
    }
    
    for (let [key,value] of Object.entries(salaries)){
        if(value >= currnum){
            currnum= value;
            empname = key;
        }
    }
    return empname
}
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 300
};
console.log(topSalary(salaries)); // */

/* 
getsecondsToday
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

function getSecondsToday(){
    let date = new Date()
    let currentSec = date.getSeconds();
    let currentMin = date.getMinutes() * 60;
    let currentHour = date.getHours() * 3600;
    return console.log(currentSec+currentMin+currentHour);
}
getSecondsToday() // */

/*circular references 
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(key,value)
    return (key != "" && value == meetup) ? undefined : value;
  })); //*/
  



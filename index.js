// Arrow functions
var myFunction=()=> {
    console.log("This is an arrow function!");
}

var sum=(a,b)=>{
    return a+b;
}

var myObject={
    name:"John Doe",
    sayYourName1:function() {
        console.log("My name is: ",this.name);
    },
    sayYourName2:()=>{
        //Here the arrow function doesn't have access to this
        // So you should avoid using arrow functions as object's properties.
        console.log("My name is:",this.name);
    }
}
//If the arrow function returns an expression
//You don't need the curly brackets or the return keyword.
var sum1=(a,b)=>a+b;

//let and const
//let variables are bound to the context where they are created.
let b="this is a normal variable";
//const variables cannot be re-assigned. They never change their value.
const c="this is a constant";
//Objects are passed by reference, so you can still execute methods that mutate the Objects
const list=[];
list.push(1);
const constObject={};
constObject.name="John Doe";
//Once you assign a value of a const, you can never assign it again, so if you do
// const x=y; you can never do x= again.

//

const myList=["A","B","C","D"];
//Loop through the elements of the Array and at every step executes the callback function where
// element: Is the element at the position
// index: Is the position in the loop
myList.forEach((element,index)=>{
    console.log("Position:",index);
    console.log("Element:",element);
});
//The filter method of arrays returns an array with only the elements for which the callback
// function returns true. The callback function receives two arguments and must return a boolean:
// element: Is the element at the position
// index: Is the position in the loop
const consonantsOnly=myList.filter((element,index)=>{
    if(element!="A") {
        return true;
    } else {
        return false;
    }
});
const vowelsOnly=myList.filter(element=>element==="A");


const students=[{name:"John",lastname:"Doe"},{name:"Joahnna",lastname:"Doe"}];
//THe map method will loop through the array, and at each step execute the callback function  
//The callback function receives two arguments and must return a value:
// element: Is the element at the position
// index: Is the position in the loop
// The map function will return an array containing the values returned by the callback function
// at each step.
const studentsFullNames=students.map((element,index)=>{
    return element.name+' '+element.lastname;
});
const studentsLastnames=students.map(element=>element.lastname);


const numbers=[2,3,44,5,3,4];
//The reduce method will loop take two arguments, a callback function and an initial value
// The callback function receives two arguments, an accumulator and a current element.
// At every step of the loop, the accumulator value will become the value returned by
// the callback function.
const arraySum=numbers.reduce((totalSoFar,element)=>{
    return totalSoFar+element;
},0);
const brokenPhrase=["hello","world","its","me"];
const phrase=brokenPhrase.reduce((currentPhrase,word)=>{
    return currentPhrase+" "+word;
},"");

//Sorts an array and to decide whether one element comes before or after the next one
// it executes the callback function that takes two arguments. And if the return value is 
// positive, the second argument goes first, otherwise the first argument goes firt.
numbers.sort((a,b)=>a-b);

//The includes method of arrays, returns true if the array contains the value passed as argument.
const hasNumberTwo=numbers.includes(2);

//Returns the array backwards
const reversedArray=numbers.reverse();

//Returns the result of concatenating the elements of the array using the argument as separator.
const joined=numbers.join(" ");

let name="John";
let lastname="Doe";
//String literals use backticks (`) instead of quotes, and you can place expressions within
// ${something} and it will be replaced with the value of something.
let fullName=`${name} ${lastname}  "this" or 'this'`;

const mySampleArray=["a","b","c","d"];
//A for of loop, loops through an iterable object (Ex: Arrays,Strings, and others) and at each
// step of the loop, element will be the value of the element in the object at that position
for(let element of mySampleArray) {

}
const myObject={
    name:"John",
    lastname:"Doe"
};
//Loop through the properties of an object, at each step property will be the name of the property
for(let property in myObject) {
    myObject[property]
}
//Get all the keys of an object
const keys=Object.keys(myObject);

//Get all the key,value pairs of an object (Ex: ["name","John"])
const keys=Object.entries(myObject);


//The rest operator allows you to process an arbitrary number of arguments in a function.
const sum=(a,b,...input)=>{
    //input is going to be an array with all the arguments passed to the function
    return a+b+input.reduce((total,value)=>total+value,0);
}

const myNumbers=[1,2,3];
const mySecondNumbers=[4,5,6];
//The spread operator in Arrays will dump the elements of the array into the new array as if we
//were adding them one by one
const myMoreNumbers=[...myNumbers,...mySecondNumbers];

const myPerson={
    name:"John",
    lastname:"Doe"
};
//The spread operator in Objects will dump the properties and their values of the Object into 
//the new Object as if we
//were adding them one by one
const studentDoe={
    name:"New One",
    role:"Student",
    ...myPerson
};
//Destructuring an object will create variables named after the properties of the object
// and their values being the values of those properties in the object
let {name,lastname}=studentDoe;

const nameArray=["John","Doe","Student"];
//Destruturing an Array, will create variables with their values being the values at their positions
// in the array
let [name,lastname]=nameArray;











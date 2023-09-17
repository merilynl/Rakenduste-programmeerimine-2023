num1 = 2
str1 = "2"
num2 = 2

if(num1 == str1){
    console.log("number 2 equals string 2 with ==")
}else{
    console.log("number 2 doesnt equal string 2 with ==")
}
if(num1 == num2){
    console.log("number 2 equals number 2 with ==")
}else{
    console.log("number 2 doesnt equal number 2 with ==")
}
if(num1 === str1){
    console.log("number 2 equals string 2 with ===")
}else{
    console.log("number 2 doesnt equal string 2 with ===")
}
if(num1 === num2){
    console.log("number 2 equals number 2 with ===")
}else{
    console.log("number 2 doesnt equals number 2 with ===")
}

//async makes a function return a Promise
//await makes a function wait for a Promise

async function myFunction() {
    return "Hello"
}
myFunction().then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
);

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("Goodbye !!")
    });
    console.log(await myPromise)
}
myDisplay();

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve("OK"); // when successful
      myReject("Error");  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ console.log(value); },
      function(error) { /* code if some error */ console.log(error); }
    );

console.log(myPromise)

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(`Original array ${numberArray}`)

const modArray = numberArray.map((number) => number + 2)
console.log(`Mapped array ${modArray}`)

const filteredArray = numberArray.filter((number) => number < 10)
console.log(`Filtered array ${filteredArray}`)
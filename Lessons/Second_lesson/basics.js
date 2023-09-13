//luua array numbritega ja leida spetsiifilise numbri index

const numbers = [1,2,3,4,5,6,7];

function findIndex(list, searchElement){
    //let index = list.indexOf(searchElement);
    return list.indexOf(searchElement);
}

console.log(findIndex(numbers, 3));

//arrow functions
//() => { }
//() => (return)
//kui 1 variable ei pea sulge panema

function add(num1,num2){
    return(num1+num2);
}
console.log(add(2,3));

const arrowFunction = (num1, num2) => {
    return num1+num2;
}
console.log(arrowFunction(2,3));

const arrowFunction2 = (num1, num2) => num1 + num2;
console.log(arrowFunction2(2,3));

//nested

function add2(num1, num2){
    return function addHelper(num2){
        return num1+num2;
    }
}
console.log(add2(3)(4));

//nested arrow function

const nestedArrow = (num1) => (num2) => num1+num2;
console.log(nestedArrow(3)(4));

//arrow function "Hello (nimi)" ja kasutada string literals
//${variableName}

//const namexd = "xd"
//const name = `Name is ${namexd}`
const greeting = (name) => `Hello ${name}`;
console.log(greeting("xd"));

//map/filter/reduce?

const numberArray = [1,2,3,4,5];
//luua uus massiiv numberArray põhjal, kus igale nr-le liidetakse 5
const newArray = numberArray.map((element) => element + 5);
//.map(()=>{})
console.log({newArray});

const newArray2 = numberArray.map((element, index, array) => {
    //key: value  siin esimene "element" on shorthand, kuna key ja value on samanimelised
    console.log({
        element, 
        newElement: element+5, 
        index, 
        array
    });

    return element + 5;
});
console.log(newArray2);

//filter - kõik mis on true lähevad uude massiivi
const filteredArray = numberArray.filter((element) => element < 4);
console.log({numberArray, filteredArray});

const names = ["Juku", "Mari", "Jaan", "Anni"];
const data = names.map(name => ({name: name, age: name.length+20, email: `${name.toLowerCase()}@company.com`, address: `${name} street ${name.length+1}${name.length+1}`, username: name.split("").reverse().join("")}));
console.log(data);
console.log(data[0]);

//tahan juku andmetele pikkuse juurde lisada
//spreadsyntax ... - võta vana objekt ja lisa midagi juurde
const addHeight = {
    ...data[0],
    height: 175
}
console.log({addHeight});

//saab üle kirjutada andmeid:
const changeAge = {
    ...data[0],
    age: 26
}
console.log({changeAge});


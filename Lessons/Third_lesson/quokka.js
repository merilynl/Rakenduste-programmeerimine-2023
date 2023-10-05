// == vs ===

const a = 1,
  b = 2,
  c = 3,
  d = 4;

console.log(1 == "1");
console.log(1 === "1");

// String to number

let actuallyANumber = "1";
console.log(parseInt(actuallyANumber));
console.log(+actuallyANumber);

// Trading places
(() => {
  let a = 99,
    b = 1;

  console.log({ a, b });
  [a, b] = [b, a];

  console.log({ a, b });
})();

// Array deconstruct
(() => {
  const array = () => [1, 2, 3, 4, 47];

  const decontruct = () => {
    const [b, , d, , a] = array();

    return { a, b, d };
  };

  console.log(decontruct());
})();

const merilyn = {
  name: "merilyn",
  school: "TLU",
  "dreams and etc": "🙂",
};

console.log(merilyn.name + " " + merilyn.school);
//console.log(merilyn.dreams and etc)
console.log(merilyn["name"] + " " + merilyn["school"]);
console.log(merilyn["dreams and etc"]);

// Object deconstruction
(() => {
  const myObject = {
    time: 1,
    place: 2,
    city: 3,
    something: 4,
  };

  const deconstruct = () => {
    const { city: myObjectsCity, place } = myObject;

    return { myObjectsCity, place };
  };

  console.log(deconstruct());
})();

// one-liner return
(() => {
  const functionCaller = (fn) => {
    if (!fn().callback) return;

    return fn().callback();
  };

  const weakFunctionCaller = (fn) => {
    return fn().callback();
  };

  const myFunction = () => {
    return { callback: () => "hello1" };
  };

  const myFunction2 = () => {
    return { noCallback: () => "hello2" };
  };

  console.log(functionCaller(myFunction));
  console.log(weakFunctionCaller(myFunction));

  console.log(functionCaller(myFunction2));
  console.log(weakFunctionCaller(myFunction2));
})();
// how to return the hello2 too
/* const functionCaller = (fn) => {
    const result = fn();
    if (result && result.callback) {
      return result.callback();
    }
    return result; // Return the entire result if there's no callback.
  };

  const weakFunctionCaller = (fn) => {
    const result = fn();
    if (result && result.callback) {
      return result.callback();
    }
    return result; // Return the entire result if there's no callback.
  }; */

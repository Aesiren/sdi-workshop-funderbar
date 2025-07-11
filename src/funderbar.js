(function () {
  'use strict';

  window._ = {};

  var FILL_ME_IN = 'Fill this value in';

  //_.define is wanting you to declare a variable, set your variable to the input from the function
  // and then return the variable you just created. This function is nearly completed for you,
  // to help guide you toward success in your work on the following exercises.
  _.define = function (input) {
    // Declare a variable below that is assigned the value of input;
    var result = input;
    // return the above variable
    return result;
  }

  //_.dataType is wanting you to determine the data type of what is being passed into it.
  // Return the datatype of input: ie. string or number or boolean etc.
  _.dataType = function (input) {
    //Code Goes Below
    var result = typeof input;

    return result;

  }

  //_.sum takes two numbers as parameters and returns their sum
  _.sum = function (a, b) {
    //Code Goes Below
    var result = a + b;

    return result;

  }

  //_.subtract takes two numbers as parameters and returns their difference
  _.subtract = function (a, b) {
    //Code Goes Below
    //For your code remember to subtract b from a
    //a - b
    var result = a - b;
    return result;

  }

  //_.multiply takes two numbers as parameters and returns their product
  _.multiply = function (a, b) {
    //Code Goes Below
    var result = a * b;
    return result;

  }

  //_.divide takes two numbers as parameters and returns their quotient
  _.divide = function (a, b) {
    //Code Goes Below
    //a divided by b
    var result = a / b;
    return result;

  }

  //_.remainderOperator takes two numbers as parameters and returns their remainder of a divided by b
  _.remainderOperator = function (a, b) {
    //Code Goes Below
    //return the remainder of a divided by b
    var result = a % b;
    return result;
  }

  //_.increment takes a number as a parameter and increces it by 1
  // Ensure you use the proper increment operator(not a+1)
  _.increment = function (a) {
    //Code Goes Below
    var result = a;
    result += 1;
    return result;

  }

  //_.decrement takes a number as a parameter and reduces it by 1
  // Ensure you use the proper decrement operator (not a-1)
  _.decrement = function (a) {
    //Code Goes Below
    var result = a;
    result -= 1;
    return result;

  }

  //This function is complete and working. All you will need to do is
  //replace FILL_ME_IN in the variables.js test file.

  _.mathOrder = function (test) {
    return test;
  }


  //PART II

  //-------------------------------------------------------------------------
  /*
    Now you will start using logic to pass your tests. You will be using comparators to pass the tests.
  */
  //-------------------------------------------------------------------------

  //_.same takes two parameters and returns whether they are the equal or not
  _.same = function (a, b) {
    //Code Goes Below
    var result = a === b ? true : false;
    return result;

  }

  //_.greater takes two numbers as parameters and checks if a is greater than b
  _.greater = function (a, b) {
    //Code Goes Below
    var result = a > b ? true : false;
    return result;

  }

  //_.lessThan takes two numbers as parameters and checks if a is less than b
  _.lessThan = function (a, b) {
    //Code Goes Below
    var result = a < b ? true : false;
    return result;

  }

  //_.falsyOrTruthy takes a parameter and determines whether it is TRUTHY or FALSY
  _.falsyOrTruthy = function (a) {
    //Code Goes Below
    var result = a ? true : false;
    return result;

  }

  //In the next tests you will be given four parameters to compare, sort of.
  //You will be given a, b, c, and d. Within your function you will compare
  //a to b as well as comparing c to d. You will then compare their outcomes with
  //each other using the && or || logic to return true or false.
  //EXAMPLE 3 > 2 && 5 === 6
  //The above example will evaluate to False because 3 > 2 === True and 5 === 6 False,
  // as you learned in the Learn content True && False evaluates to False.
  //For the _.andAnd function as well as the _.oror function you will just be using the === comparator

  //_.andAnd will be using the && comparator
  _.andAnd = function (a, b, c, d) {
    //Code Goes Below
    var result = _.same(a, b) && _.same(c, d) ? true : false;
    return result;
  }

  //_.orOr will be using the || comparator
  _.orOr = function (a, b, c, d) {
    //Code Goes Below
    var result = _.same(a, b) || _.same(c, d) ? true : false;
    return result;

  }

  //Control Flow
  //Create a basic if statement to pass the tests.
  _.ifLogic = function (a, b) {
    //Code Goes Below
    var result = _.same(a, b) ? "Great" : undefined;
    return result;

  }

  //Create a basic if else statement to pass the tests.
  _.ifElseLogic = function (a, b) {
    //Code Goes Below
    var result = _.same(a, b) ? "Great" : "Good";
    return result;

  }

  //Using a for loop, iterate through the array passed.
  //Return the array as a single string.
  _.forLoop = function (a) {
    //Code Goes Below
    var array = a;
    var result = "";

    for (var x = 0; x < array.length; x++) {
      result = result + array[x];
    }

    return result;

  }

  //Using NESTED for loops, iterate through an array or arrays
  _.nestedForLoop = function (a) {
    //Code Goes Below
    var array = a;
    var result = 0;

    for (var x = 0; x < array.length; x++) {
      for (var y = 0; y < array[x].length; y++) {
        result += array[x][y];
      }
    }

    return result;


  }

  //While looping through the array passed determine the data type of the element. If the element is a number add it to a variable. At the end return that variable.
  //If an index in the array is not a number add 1 to the above mentioned variable
  _.forIfElseNum = function (a) {
    //Code Goes Below
    var numResult = 0;
    var array = a;

    for (var x = 0; x < array.length; x++) {
      numResult += typeof array[x] === 'number' ? array[x] : 1;
    }

    return numResult;

  }

  //This function is similar to the above function. Only this time you will be building a sentence rather than a total number. Loop through the array and concatenate the strings in it to make a sentence.
  //If an index in the array is not a string add and empty string ("") to the local variable
  _.forIfElseStr = function (a) {
    //Code Goes Below
    var strResult = "";
    var array = a;

    for (var x = 0; x < array.length; x++) {
      strResult += typeof array[x] === 'string' ? array[x] : "";
    }

    return strResult;

  }

  //In this function you will loop though the passed in array. Prior to that you need to check the second parameter to determine what you will be returning.
  //If the second parameter is 'string' return a sentence created using the strings in the array. If the second parameter is 'number' you will return the total of the number in the array.
  //You may notice you did this work already in previous functions but need to combine them in some way. Ideally, you should call the previous two functions in your implementation instead of copy/pasting the 'guts'.
  _.ifElseFor = function (a, b) {
    //Code Goes Below
    var check = b;
    var array = a;
    var result;

    if (check === 'string') {
      result = _.forIfElseStr(a);
    } else if (check === 'number') {
      result = _.forIfElseNum(a);
    }

    return result;

  }

  //PART III
  //-------------------------------------------------------------------------
  /*
    Part III will be using arrow functions rather than the traditional function implementation. Note the similarities and differences.
  */
  //-------------------------------------------------------------------------

  //Below you will be building a function that creates an object using bracket notation ([]). Within the function create and return an object.

  _.objectCreationBracket = (a, b, c) => {
    //Code Goes Below
    let obj = {
      firstName: a,
      lastName: b,
      zord: c
    }

    return obj;

  }

  //Below you will be building a function that creates an object using dot notation (.). Within the function create and return an object.

  _.objectCreationDot = (a, b, c) => {
    //Code Goes Below
    var obj = {};

    obj.firstName = a;
    obj.lastName = b;
    obj.zord = c;
    return obj;

  }

  _.objectValue = (a, b) => {
    //Code Goes Below
    var result = a[b];
    return result;

  }


  //Below you are going to loop through an array, only this time you need to use a for...of loop rather than an traditional for loop.
  //The tests will be similar to the last time you looped through an array.
  //What you will be doing is called refactoring. You take working code and restructure it, either for readability or efficiency, or any other countless number of reasons.
  //NOTE: You can also use the same logic in a for...of loop as you would use in a traditional for loop.

  //Loop through the given array and return the total sum of all the numbers in the array.
  _.forOf = (a) => {
    //Code Goes Below
    var result = 0;
    var array = a;

    // for (let x = 0; x < array.length; x++) {
    //   if (typeof array[x] === 'number') {
    //     result += array[x];
    //   }
    // }
    for (var arr of array) {
      if (typeof arr === 'number') {
        result += arr;
      }
    }

    return result;


  }

  //Loop through the given object and return an array of keys from the object.
  //Note: to add values to an array use .push();
  //example array.push(value)
  _.forInKeys = (a) => {
    //Code Goes Below
    var array = a;
    var result = [];

    for (let arr in array) {
      result.push(arr);
    }
    console.log(result);
    return result;

  }

  //Loop through the given object and return an array of values from the object.
  //This is similar to the above function but needs a little digging to get the value.
  _.forInValues = (a) => {
    //Code Goes Below
    var array = a;
    var result = [];

    for (let arr in array) {
      result.push(array[arr]);
    }
    console.log(result);
    return result;
  }
}());

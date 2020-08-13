// *****RECURSION *****

// Recursion is a process (or a function) that calls itself
// JSON.parse / JSON.stringify --> Recursive functions
// document.getElementById and DOM traversal algos --> recursive
// Object Traversal
// Often used with more complex data structures
// Sometimes a cleaner alternitive to interations

// *** The Call Stack **
// It's a stack data structure
// any time a function is invoked, it is placed (pushed) on the top of the call stack.
// when JS sees the return keyword or when the function ends, the compiler will remove(pop)

// *** Base Case ***
// A clear stopping point. 

// Two essential parts of recursion: 

// Base Case and Different Input

function sumRange(num){
    if(num === 1) return 1; //Base Case
    return num + sumRange(num-1); // Recursive Call
}

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

// Common Recursion Pitfalls:
// No Base Case (Infinite Loop!!! OH NOOOOOOO!!!)
// Forgetting to return OR returning the wrong thing :(
// Stack Overflow (Maximum Call Stack exceeded)

// ***** Helper Method Recursion ***** 

function collectOdds(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

// *** Pure Recursion ***

function pureCollectOdds(arr){
    let newArr = [];
    if(arr.lencth === 0){
        return newArr;
    }
    if(arr[0] % 2 !==0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(pureCollectOdds(arr.slice(1)))
    return newArr;
}

// ** Recursion Practice Problems **
// Powers
function power(num, p){
    if(p === 0) return 1;
    if( p <= 1 ) return num;
    return num * power(num, p -1);
}

// Factorial
function factorial(num){
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1)
 }

 // Product of Array
 function productOfArray(arr){
    if(arr.lengnth === 0) return;
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1))
}

// Recursive Range
function recursiveRange(num){
    if(num === 0) return;
    if(num === 1) return 1;
    return num + recursiveRange(num - 1)
 }
 
 //Fibonacci Sequence

 function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Reverse String
function reverse(str){
    if(str.length <= 1) return str;
    return str[str.length -1] + reverse(str.slice(0,-1));
}

//Palindrome

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

//Array with CB function?

function someRecursive(arr, cb){
    if(arr.length <= 0) return false;
    if(cb(arr[0]) === true){
        return true
    }
    return someRecursive(arr.slice(1), cb)
  }

// Flattern arrays of arrays...
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }




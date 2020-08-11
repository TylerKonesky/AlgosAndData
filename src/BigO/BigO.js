
function addUpTo(n){
    let total = 0;
    for (let i = 1; i<=n; i++){
        total += i;
    }
    return total;
}

// OR

function addUpToo(n){
    return n * (n + 1) / 2
}

//Which is better?
// Faster? Less Memory? More Readable?
// Focus on speed first

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(t1-t2)

// Time isn't always consistent... So what do we use instead?
// Lets count the number of simple operations the computer has to perform. 

//Definition:
//We say that an algo is O(f(n)) if the number of simple operations
// the computer has to do is eventually less than a constant times f(n), as n increase. 
// Big O refers to worst case scenario as well... 

// - f(n) could be linear (f(n)-1)
// - f(n) could be quadratic (f(n) = nsquared)
// - f(n) could be constant (f(n) = 1)
// - f(n) could be something completely different... 

//O(1) = constant

//RULES OF THUMB

// 1. Arithmetic operations are constant
// 2. variable assignment is constant
// 3. accessing elements in an array(by index) or object(by key) is constant
// 4. in a look, the complexiry is the length of the loop times the complexity
//    of whatever happens inside the loop


//SPACE COMPLEXITY (the amount of memory that is taken up)

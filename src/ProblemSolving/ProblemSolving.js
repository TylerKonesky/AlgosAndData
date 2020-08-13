
// What is an algorithm?
// - A process or set of steps to accomplish a task. 

// Steps (adapted from "How to solve it: George Polya"):
//     1. Understand the Problem
//         - Can I restate the problem in my own words?
//         - What are the inputs that go in to the problem?
//         - What are the outputs that should come from the solution?
//         - Can the outputs be determined from the inputs? / Do I have enough information?
//         - How should I label the important pieces of the data that are part of the problem?

//     2. Explore Concrete Examples
//         -  Start with simple Examples
//         - Progress to more complex Examples
//         - expore examples with empty and/or invalid inputs
//         Example: Count Characters:
//             "aaaa" ==> {"a": 4}
//     3. Break It Down
//         - Explicitly write out the steps you need to take. 
//         - psuedo code!
//     4. Solve/Simplify
//         - Solve the problem if you can. If you can't, solve a simpler problem. 
//     5. Look back and refactor. 
//         - Can you check the restult?
//         - Can you derive the result differently?
//         - Can you understand it at a glance?
//         - Can you use the restult or method for some other problem?
//         - Can you improve the performance of your solution?
//         - Can you think of other ways to refactor?
//         - How have other people solved this problem?

//****Frequency Counters!! ********* */
// Usually O(n *squared)


//***** Multiple Pointers Pattern */
//This pattern starts and the front and the back of the array and moves the indicies left or right
// this chances the Big O from O(n^2) to O(n)

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left] + arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++
        }
    }
}

//***** Sliding Window Pattern ***** */

// *****Divide and Conquer****** //
// This patter can tremendously decrease time complexity
// Works for sorted arrays... think like starting in the middle... is what I am looking for above or below that... go to the next middle... etc. 



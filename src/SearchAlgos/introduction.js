// Linear Search, Binary Serach, Naive String searching, KMP String Searching Algorithm

//Linear Search:

// Simplest way is to look at every element in order... Especially with unsorted data... indexOf, .includes, .find, etc.

// Linear Search ==> Big O: Time Complexity Best case: O(1) -- Worst Case: O(n) -- Average: O(n)

// Binary Search - Can be a much faster form of search
// Rather than eliminating one element at a time... you can eliminate HALF. But there must be an order to the array. 
// Starts at the middle. Is the check greater or smaller than the search. Then eliminate the other half... keep cutting the list in half
// until you find the search item. 
// DIVIDE AND CONQUER

//Binary Search: return the index of the value

function binarySearch(arr, el){
    let start = 0;
    let end = arr.length -1;
    var middle = Math.floor((start + end) /2);

    while(arr[middle] !== el){
        if(start > end || end < start){
            return -1;
        }
        if(el < arr[middle]){
            end = middle -1;
            middle = Math.floor((start + end) /2);
        }else{
            start = middle + 1;
            middle = Math.floor((start + end) /2);
        }
    }
    return middle
}

// O(log2n)

//Count strings withing a string....

function stringCounter(str, val){
    let count = 0;
    for(let i=0; i<=str.length - val.length; i++){
        if(str[i] === val[0]){
            if(str.slice(i, i + val.length) === val){
                count += 1;
            }
        }
    }
    return count;
}

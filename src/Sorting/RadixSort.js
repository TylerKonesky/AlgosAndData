// Radix Sort
// Special sorting algorithm that works with NUMBERS
// Never makes comparisons between elements.
// It expoits the fact that information about the size of a number is encoded in the number of digits
// 10 buckets of numbers (0-9) based on the last number of the number. 


//This function returns the digit at a particular index. 
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

//This function checks the number of digits in a number
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
}

// This function returns the largets number of digits
function maxDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

//This is the final function...

function radixSort(nums){
    let maxDigitCount = maxDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i< nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

radixSort([5, 20, 339, 4 , 9999, 6 , 871, 9846546])
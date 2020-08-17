// Merge Sort is significantly faster than bubble sort
// Created in 1948
// Splitting - Merging - Sorting
// We split up the larger array in to arrays of 0 or 1 elements and then merge everything back together. 

// Merging sorted arrays: 
// Should run in O(n + m)

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merger(left, right)
}

function merger(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++;
        }else{
            results.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        results.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++
    }
    return results;
}

mergeSort([10,25,36,11,5,9,88,123])
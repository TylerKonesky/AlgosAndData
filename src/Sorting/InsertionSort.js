// Similar to bubble and Selection sorting
// Builts up the sort by gradually creating a larger left half, which is always sorted. 

function insertSort(arr){
    for(let i = 1; i<arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        for(j; j >= 0 && arr[j] > current; j--){
            arr[j + 1] = arr[j];
        }
        arr[j+1] = current;
        console.log(arr)
    }
    return arr
}

insertSort([5,12,13,1,8,22,55,3])

//Big O --> time complexity: worst case: O(n^2)
//          if the data is already somewhat sorted significantly improves the sort

// Insertion sort works well when you run the sort as the data comes in. 
//Quick Sort:
// Works by selecting one element called the "pivot" adn finds the index where the pivot should end up. 

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    var pivoter = arr[start];
    var swapIndex = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivoter > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i)
        }
        
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}



quickSort([4,8,2,1,5,7,6,3, 100])
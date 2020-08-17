// Similar to bubble sort, but insead of placing large vales into sorted position, it places small values in to sorted position. 

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        var min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
                
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp; 
    }

    return arr;
}
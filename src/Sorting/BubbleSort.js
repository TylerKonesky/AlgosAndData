//What is Sorting: The process of rearranging items in a collection so they are in some kind of order

// How does Array.sort work?: It sorts by unicode value if you don't pass in any arguments. 
// Telling Array.sort how to sort: It accepts an comparison ie: Array.sort((a, b) => a - b)

// ****** Bubble Sort ****** 
// Not super efficient and not commonly used -- 
// Named because larget numbers bubble to the top

function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//Innefficient but working bubble sort...

function bubbleSort(arr){
    for(let i = 0; i< arr.length; i++){
        for(var j = 0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
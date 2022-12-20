//quick sort
// 1. Choose the base element (pivot) number
// 2. Divide the array into two (less than the base and greater than the base element)
// 3. Sort the subarrays, recursively

const arr = [3, 3, 2, 1, 5, 11, 0];

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivotNum = arr[pivotIndex];
    const lessArray = [];
    const greaterArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivotNum) {
            lessArray.push(arr[i]);
        } else {
            greaterArr.push(arr[i]);
        }
    }

    return [...quickSort(lessArray), pivotNum, ...quickSort(greaterArr)];
}

console.log(quickSort(arr));

//big O
// O(N): we use a for loop and run through the array on N elements, modifying each element, for example;
// O(N*N): we use a for loop and run through the array on N elements, modifying each element, but we also use an inner for loop to compare , for example;
// 0(log N * N)

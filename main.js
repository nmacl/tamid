/*
Challenge 1: Sorting & Runtime
Given two sorted arrays (arr1, arr2) and a number, k, create a method, sortArrays that returns a sorted array of the first k elements.

Bonus points if you can comment the space/time complexity of your method. Bonus points if you do this in O(n). Bonus points if you write this in one line and it runs in O(n*logn)

Examples
Array 1: [1, 3, 5, 8]
Array 2: [1, 2, 3]
Number (k): 5

sortArrays(arr1, arr2, k) returns:
[1, 1, 2, 3, 3]
Array 1: [2, 8, 15, 30]
Array 2: [1, 2, 3]
Number (k): 2

sortArrays(arr1, arr2, k) returns:
[1, 2]
Array 1: [1, 3, 5, 8]
Array 2: [1, 2, 3]
Number (k): 0

sortArrays(arr1, arr2, k) returns:
[]
Array 1: [1, 3, 5, 8]
Array 2: []
Number (k): 10

sortArrays(arr1, arr2, k) returns:
[1, 3, 5, 8] 
*/

// Concat O(n + m) 
// Time complexity of merge is O(n + m)
// Sort complexity is O(n * log(n))
// when sorting an array of n + m elements, the time complexity becomes O((n + m) log (n + m)).
function sortArrays(arr1, arr2, k) {
    // Step 1: Merge the two arrays
    let mergedArray = arr1.concat(arr2);

    // Step 2: Sort the merged array
    mergedArray.sort(function(a, b) {
        return a - b;
    });

    // Step 3: Get the first k elements of the sorted array
    let result = mergedArray.slice(0, k);

    return result;
}

// Example usage:
let arr1 = [1, 3, 5, 8];
let arr2 = [1, 2, 3];
let k = 5;
console.log(sortArrays(arr1, arr2, k)); // Output: [1, 1, 2, 3, 3]

arr1 = [2, 8, 15, 30];
arr2 = [1, 2, 3];
k = 2;
console.log(sortArrays(arr1, arr2, k)); // Output: [1, 2]

arr1 = [1, 3, 5, 8];
arr2 = [1, 2, 3];
k = 0;
console.log(sortArrays(arr1, arr2, k)); // Output: []

arr1 = [1, 3, 5, 8];
arr2 = [];
k = 10;
console.log(sortArrays(arr1, arr2, k)); // Output: [1, 3, 5, 8]



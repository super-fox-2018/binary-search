'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++){
    let temp = 0;
    for (var j=i; j > 0;  j--){
      if (arr[j-1] > arr[j]){
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let endArr = array.length - 1;
  let startArr = 0; 
  let mid = 0;
  while (startArr <= endArr){
    mid = Math.round((endArr+startArr)/2);
    if (array[mid] === search){
      if (array[mid -1] === search){
        return mid -1;
      }
      return mid;
    }else{
      if (array[mid] <= search){
        startArr = mid + 1;
      }else{
        endArr = mid - 1;
      }
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

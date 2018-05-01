'use strict';

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i; // first init

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; //exchange
      }
    }
    if (min != i) {
      var change = arr[i];
      arr[i] = arr[min];
      arr[min] = change;
    }
  }
  return arr;
}

function binary_search(search, array) {
  var min = 0;
  var max = array.length - 1;

  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    if (array[mid] === search) {
      return mid;
    } else if (array[mid] < search) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);
// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

// module.exports = {
//   binary_search,
// };

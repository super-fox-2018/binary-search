'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var forArrI = ''
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        forArrI = arr[i]
        arr[i] = arr[j]
        arr[j] = forArrI
      }
    }
  }
  return arr;
  // console.log(arr);
}

function binary_search(search, array) {
  var top = array.length-1
  var bottom = 0
  var searchResult = 0
  var mid = 0
  while (bottom <= top) {
    mid = Math.floor((top + bottom) / 2)
    if (array[mid] === search) {
      return mid;
    }
    else if (search < array[mid]) {
      top = mid -1
      searchResult += top
    }
    else if (search > array[mid]) {
      bottom = mid +1
      searchResult += bottom
    }
    else if (mid === 0) {
      return -1;
    }
  }
  // return searchResult;
  for (var i = 0; i < array.length; i++) {
   if (search !== array[i]) {
     return -1;
   }
  }
  return searchResult;
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

// module.exports = {
//   binary_search
// }

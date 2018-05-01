'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr){
  for (var i = 1; i < arr.length; i++) {
    for (var j = i-1; j >= 0; j--) {
        if(arr[j+1] < arr[j]){
          let move = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = move
        } else {
          break;
        }
    }
  }
  return arr
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

function binary_search (search, array) {
  // console.log(array);
  let str = 0
  let fin = array.length


  while(str <= fin){
    let mid = Math.floor((str+fin)/2)
    if(search == array[mid] ){
      return mid
    } else if(search > array[mid]){
      str = mid + 1
    } else if(search < array[mid]){
      fin = mid - 1
    }
  }

  return -1
}


console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

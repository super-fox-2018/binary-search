'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  
  for(var x=0; x<arr.length; x++) {
    var bun=arr[x]
    for(var y=x-1; y>=0; y--) {

      if(arr[y]>bun) {
        arr[y+1]=arr[y]
      } else {
        break
      }
    }
    arr[y+1]=bun
  }

  return arr
}

function binarySearch (search, array) {
  
  if(array.length===1 && array[0]===search) {
    return 1
  } else if(array.length===1) {
    return 0
  } else if(cariMedian(array)>search) {
    return binarySearch(search, array.splice(0,(Math.floor(array.length/2))))
  } else if(cariMedian(array)<search) {
    return (Math.floor(array.length/2))+binarySearch(search, array.splice((Math.floor(array.length/2))))
  }
}

function cariMedian(arr) {

  if(arr.length%2===0) {
      return ((arr[arr.length/2]+arr[((arr.length/2)-1)])/2)
  } else if(arr.length%2!==0) {
      return (arr[Math.floor(arr.length/2)])
  }
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

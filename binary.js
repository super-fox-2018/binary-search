'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var tempInd = 0
  var checkedInd = 0
  var temporary = arr[checkedInd]
  while(checkedInd<arr.length){
      for (var i=checkedInd+1;i<arr.length;i++){
          if(temporary>arr[i]){
              temporary = arr[i]
              tempInd = i
          }
      }
      if(temporary !== arr[checkedInd]){
          var temp = arr[checkedInd]
          arr[checkedInd] = temporary
          arr[tempInd] = temp
      }
      checkedInd++
      temporary = arr[checkedInd]
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var minIndex = 0
  var maxIndex = array.length-1

  console.log(array)
  while(minIndex <= maxIndex){
    var StartingIndex = parseInt(maxIndex+minIndex/2)
    if(array[StartingIndex]>search){
      maxIndex = StartingIndex-1
    }else if(array[StartingIndex]<search){
      minIndex = StartingIndex+1
    }else if(array[StartingIndex]==search){
      return StartingIndex
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}

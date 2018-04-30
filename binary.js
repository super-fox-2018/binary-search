'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i=0; i<arr.length; i++){
    for (var j=i+1; j<arr.length; j++){
      if (arr[i] >= arr[j]){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  // console.log(arr) ini untuk hasil yang sudah di sort
  return arr 
}

// yang dibawah ini function buat check apakah number yang di search ada or g, kalau ada return 1 klu g ada return 0
// tapai kalau mau dikasih liat di indext berapa tinggal ganti return i dan kalau g ada di index berapa return -1

function binarySearch (search, array) {
  // console.log(ownSort(array))
  for (var i=0; i<ownSort(array).length; i++){
    if (ownSort(array)[i]===search){
      return 1
    }
  }
  return 0;
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

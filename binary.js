'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 0; i < arr.length; i++){
   var temp = 0;
   for(var k = i+1; k > 0; k--){
     if(arr[k - 1] > arr[k]){
       temp = arr[k-1];
       arr[k-1] = arr[k];
       arr[k]= temp;
     }
   }
   console.log(arr);
 }

 return arr;


}

function binary_search (search, array) {
  var mid = Math.floor(array.length / 2);

  if(array[mid] === search){
    return mid;
  }
  else{
    if(array[mid] > search){
      while(array[mid] > search  && mid !== 0 ){
        mid = Math.floor((0 + mid) / 2);
      }
      if(array[mid] === search){
      return mid;
      }
      else{
        return -1;
      }

    }
    else if(array[mid] < search){
      while(array[mid] < search && mid !== 0){
        mid = Math.floor((mid + (array.length - 1)) / 2);
      }
      if(array[mid] === search){
      return mid;
      }
      else{
        return -1;
      }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

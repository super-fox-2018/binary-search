'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  /* Don't push to new array. just swap the location of the arr itself*/
  var newArr = [];

  while(arr.length !== 0){
    var temp = arr[0];
    var position = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < temp){
        temp = arr[i];
        position = i;
      }
    }
    newArr.push(temp);
    arr.splice(position,1);
  }

  arr = newArr;
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

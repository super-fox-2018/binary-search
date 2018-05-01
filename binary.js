'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 21, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i=1;i<arr.length;i++) {
  	for(var j=0;j<=i-1;j++) {
  		if(arr[i]<arr[j]) {
  			var temp = arr[i]
  			arr[i]=arr[j]
  			arr[j]=temp
  		}
  	}
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var start =0
  var end = array.length-1
  

	while(start<=end) {
		var middle = Math.floor((start+end)/2)
		//console.log("xxxx",start,end,middle)
		if(search == array[middle]) {
	  		return true
	  	}else if(search >array[middle]) {
	  		start=middle+1
	  	}else if(search <array[middle]) {
	  		end=middle-1
	  	}
	}
    return false
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

 console.log(arrayGenapSorted)
// console.log(arrayGanjilSorted)

// Driver code
console.log(binary_search(22, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

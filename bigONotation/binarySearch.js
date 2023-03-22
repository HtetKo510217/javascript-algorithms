function binarySearch (arr,target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
}

console.log(binarySearch([-5,2,4,6,10],10)); // 4
console.log(binarySearch([-5,2,4,6,10],4)); // 2
console.log(binarySearch([-5,2,4,6,10],2)); // 1
console.log(binarySearch([-5,2,4,6,10],20)); // -1

// Big O => O(logn)
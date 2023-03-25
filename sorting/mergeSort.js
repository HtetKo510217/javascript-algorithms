function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result,...left,...right];
   
  }
  
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

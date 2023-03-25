function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }
  

  const myArray = [7, 3, 9, -5, 1, 6, 2, 8, -4];
  const sortedArray = quickSort(myArray);
  console.log(sortedArray); // [-5, -4, 1, 2, 3, 6, 7, 8, 9]

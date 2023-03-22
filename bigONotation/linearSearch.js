function linearSearch (t) {
    const arr = [-5,2,10,4,6];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === t) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(10)); // 2
console.log(linearSearch(6)); // 4
console.log(linearSearch(20)); //-1
// Big O => O(n)
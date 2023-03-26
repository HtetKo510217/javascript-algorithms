function towerOfHanoi(numDisks, fromRod, toRod, auxRod) {
    if (numDisks === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    towerOfHanoi(numDisks - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${numDisks} from ${fromRod} to ${toRod}`);
    towerOfHanoi(numDisks - 1, auxRod, toRod, fromRod);
  }
  
  // Example usage:
  towerOfHanoi(3, 'A', 'C', 'B');
  
  // Big-O = O(2^n)
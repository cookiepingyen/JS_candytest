function findEvenIndex(arr) {
  // Code goes here!
  let left = [];
  let right = [];

  for (i = 1; i < arr.length; i++) {
    left = arr.slice(0, i).reduce((acc, cv) => acc + cv, 0);
    right = arr.slice(i + 1).reduce((acc, cv) => acc + cv, 0);
    if (left == right) {
      return i;
    }
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

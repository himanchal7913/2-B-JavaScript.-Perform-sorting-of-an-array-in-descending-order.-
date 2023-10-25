const arr = [5, 1, 9, 4, 2];

arr.sort(function(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr);

// Output: [9, 5, 4, 2, 1]

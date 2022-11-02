function findMaxContiguousSum(arr) {
    let max_so_far = 0, max_ending_here = 0;
    for (i = 0; i < arr.length; i++) {
      max_ending_here += arr[i];
      if (max_so_far < max_ending_here) {
        max_so_far = max_ending_here;
      }
      if (max_ending_here < 0) {
        max_ending_here = 0;
      }
    }
    return max_so_far;
  
  }
  
  console.log(findMaxContiguousSum([1, 2, 3, 4, -10]));
  console.log(findMaxContiguousSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(findMaxContiguousSum([4, -1, 2, 1]));
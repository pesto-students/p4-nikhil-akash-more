function sortArray(arr) {
  let count0 = 0, count1 = 0, count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    if (arr[i] === 1) count1++;
    if (arr[i] === 2) count2++;
  }
  let i = 0;
  while (i < arr.length) {
    if (count0 != 0) {
      arr[i] = 0;
      count0--;
    } else if (count1 != 0) {
      arr[i] = 1;
      count1--;
    } else if (count2 != 0) {
      arr[i] = 2;
      count2--;
    }
    i++;
  }
  return arr;
}

console.log(sortArray([0, 0, 2, 2, 2, 1, 1, 1, 0, 1, 2]));
//Time Complexity = O(N)
//space complexity = O(1) as no new array is created
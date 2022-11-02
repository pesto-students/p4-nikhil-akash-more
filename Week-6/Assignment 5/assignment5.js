function getDifference(arr, val){
    let set = new Set();
    for (let a of arr){
      let diff = a - val;
      if(set.has(diff)){
        // return [a,diff];
        return 1
      } else{
        set.add(a);
      }
    }
    return 0;
  }
  
  console.log(getDifference([2,4,6,1,8,9], 8));
  console.log(getDifference([-10, 20], 30));
  
  //TimeComplexity O(N), space complexity O(N)
  
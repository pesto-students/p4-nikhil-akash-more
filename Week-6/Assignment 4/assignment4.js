function maxProfitFromStockSelling(arr) {
    if (arr.length <= 1) return 0;
    let minSoFar = arr[0];
    let maxProfit = 0;
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
      minSoFar = minSoFar < arr[i] ? minSoFar : arr[i];
      profit = arr[i] - minSoFar;
      maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
  }
  
  console.log(maxProfitFromStockSelling([7, 1, 5, 3, 6, 4]));
  console.log(maxProfitFromStockSelling([7, 6, 4, 3, 1]));
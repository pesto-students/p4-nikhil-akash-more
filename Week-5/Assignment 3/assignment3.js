const hasDuplicate = arr => new Set(arr).size !== arr.length;
hasDuplicate([1,5,-1,4]);
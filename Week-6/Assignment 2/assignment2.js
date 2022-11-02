//Spiral Order Matrix

var spiralOrder = function(matrix) {
    let result = [];
    // return right away if matrix is empty
    if (matrix.length === 0) return result;
  
    let top = 0;
    let down = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1
    let dir = 0;
  
    while ( top <= down && left <= right) {
      if(dir === 0){
        for (let i = left; i <= right; i++){
          result.push(matrix[top][i])
        }
        top++;
      }
      else if(dir === 1){
         for (let i = top; i <= down; i++){
          result.push(matrix[i][right])
        }
        right --;
      }  else if(dir === 2){
         for (let i = right; i >= left; i--){
          result.push(matrix[down][i])
        }
        down --;
      }  else if(dir === 3){
         for (let i = down; i >= top; i--){
          result.push(matrix[i][left])
        }
        left ++;
      }
      dir = (dir+1) %4
      }
      
    return result;
  }
  
  console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  
  //Time Complexity is O(MN), M, N being number of rows and columns
  // Space Complexity O(n);
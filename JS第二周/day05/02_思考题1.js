/* 
  删除数组最后一项的方法
*/
var arr = [0, 1, 2, 3, 4];
//1.
var res = arr.splice(arr.length-1, 1);
console.log(arr, res);

//2.
arr = [0, 1, 2, 3, 4];
arr.pop();
console.log(arr);
//3.
arr = [0, 1, 2, 3, 4];
arr.length--;
console.log(arr);


/* 
 2.给数组末尾添加项的方法
*/
//1.
var arr = [0, 1, 2, 3, 4];
var res = arr.push(5);
console.log(arr, res);

//2.
arr = [0, 1, 2, 3, 4];
arr[arr.length] = 10;
console.log(arr);

//3.
arr = [0, 1, 2, 3, 4];
arr.splice(arr.length,0,6);
console.log(arr);

arr = [0, 1, 2, 3, 4];
arr.splice(arr.length,1,99);
console.log(arr);

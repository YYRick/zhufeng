let ary = [1, 2, 3, 5, 2, 2, 2, 2, 3, 4, 1, 2, 4];

/* 
  思路：创建新数组，把原数组中的每一项添加进新数组中
  再添加的过程中根据新数组是否由该项以决定是否加入新数组中
*/
function unique(ary){
    //新数组
    var newAry = [];
    //遍历原数组中的每一项
    for(var i = 0; i < ary.length; i++){
        //判断原数组的项是否在新数组中存在
        if(newAry.indexOf(ary[i]) == -1){
           newAry.push(ary[i]);
        }
    }
    return newAry;
}

console.log(unique(ary));
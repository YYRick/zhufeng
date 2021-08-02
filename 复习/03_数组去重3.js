let ary = [1, 2, 3, 5, 2, 2, 2, 2, 3, 4, 1, 2, 4];


function unique(ary){
   var obj = {};
   for(var i = 0; i < ary.length; i++){
      var item = ary[i];
      if(obj[item]){
         ary.splice(i, 1);
         i--;
         continue;
      }
      obj[i] = ary[i];
   }
   return ary;
}

console.log(unique(ary));
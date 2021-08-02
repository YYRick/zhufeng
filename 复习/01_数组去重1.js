let ary = [1, 2, 3, 5, 2, 2, 2, 2, 3, 4, 1, 2, 4];

function unique(ary){
    for(var i = 0; i < ary.length; i++){
         for(var j = i+1; j < ary.length; j++){
             if(ary[i] == ary[j]){
                 ary.splice(j,1);
                 j--;
             }
         }
    }
    return ary;
}

console.log(unique(ary));
'use strict'
/* 严格模式下arguments和形参不存在映射关系 */
function b(x,y,a) {    
    arguments[2]=10;          
    console.log(a);//=> 3
}
      
b(1,2,3);
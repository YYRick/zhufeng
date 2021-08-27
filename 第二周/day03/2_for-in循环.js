/* 
  for in循环
    + 是JS所有循环中，性能最差的一个
    + 也是BUG最多的一个
    + 可以迭代当前对象中所有可枚举(列举)的属性
*/
Object.prototype.aaa = 'AAA';
let arr = [10, 20, 30];
let obj = {
    /* 一个对象的属性名可以是字符串或者symbol类型 */
    name: 'zhufeng',
    age: 12,
    0: 100,
    [Symbol('AA')]: 200
}

/* for (let key in obj){
    if(!obj.hasOwnProperty(key)) break;
    console.log(key, obj[key]);
} */

let keys = Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
keys.forEach(key => {
    /* 
      key：获取的某个属性
      obj[key]：获取的某个属性值
    */
    console.log(key, obj[key]);
})
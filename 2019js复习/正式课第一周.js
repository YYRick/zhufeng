/* 
  2019第八期js专题
*/
/* console.log(a); //=>undefined
    
var a = 12; 
    
function fn(){
    
    console.log(a); 
    
    var a = 13;   
    
}
    
fn();//=>undefined   
    
console.log(a);//=>12
     */

    
/*
    
 A、undefined  12 13             
    
 B、undefined undefined 12   
    
 C、undefined undefined 13         
    
 D、有程序报错
    
*/


/* console.log(a); //=>undefined
    
var a=12;
    
function fn(){
    
    console.log(a);
    
    a=13;
    
}
    
fn();//=>12
    
console.log(a);//=>13
     */

    
/*
    
 A、undefined  12 13             
    
 B、undefined undefined 12   
    
 C、undefined undefined 13         
    
 D、有程序报错
    
*/


/* //=> 报错
console.log(a);
    
a=12;
    
function fn(){
    
    console.log(a);
    
    a=13;   
    
}
    
fn();
    
console.log(a); */
    

    
/*
    
 A、undefined  12 13             
    
 B、undefined undefined 12   
    
 C、undefined undefined 13         
    
 D、有程序报错
    
*/


// var foo=1; 
    
// function bar(){
    
//     if(!foo){
    
//         var foo=10; 
    
//     }
    
//     console.log(foo); 
    
// }
    
// bar();//=> 10
    

    
/*
    
 A、1     
    
 B、10     
    
 C、undefined    
    
 D、报错
    
*/

// let foo = 1; 
    
// function bar(){
    
//     if(!foo){
    
//         let foo=10; 
    
//     }
    
//     console.log(foo); 
    
// }
    
// bar();//=> 1

/* let foo = 1; 
    
function bar(){
    
    if(foo){
    
        let foo=10; 
    
    }
    
    console.log(foo); 
    
}
    
bar();//=> 1
     */


/* let n = 12;
~ function(){
    if(1){
        n = 13;
    }
    console.log(n);//=> 13
}();
console.log(n);//=> 13 */


/* 
  VO
   n -> 0
   a -> fn(a)
*/
// var n=0; 
    
// function a(){
//     /* 
//       fn(a)
//         n -> 10 -> 11
//         b -> fn(b)
//     */
//     var n=10; 
    
//     function b(){
    
//         n++; 
    
//         console.log(n); 
    
//     }
    
//     b();//=> n++ -> 输出n -> 11
    
//     return b; //-> fn(b)
    
// }
    
// var c=a();//=>11
    
// c();//=> 12
    
// console.log(n);//=> 0
    

    

    
/*
    
 A、1 1 1   
    
 B、11 11 0  
    
 C、11 12 0  
    
 D、11 12 12
    
*/

/* 
  a -> 10
  b -> 11
  c -> 12 -> 3
*/
// var a=10,b=11,c=12;
    
// function test(a){
//      /* 
//        fn(test)
//          a -> 10 -> 1
//          b -> 2
//      */
//      a=1;
    
//      var b=2;
    
//      c=3;
    
// }
    
// test(10);
    
// console.log(a);//=> 10 
    
// console.log(b);//=> 11   
    
// console.log(c);//=> 3
    

    
/*
    
 A、1 11 3   
    
 B、10 11 12  
    
 C、1 2 3   
    
 D、10 11 3
    
*/


// if(!("a" in window)){
    
//     var a=1;
     
//  }
     
//  console.log(a);//=> undefined
     
 
     
 /*
     
  A、1   
     
  B、undefined   
     
  C、报错   
     
  D、以上答案都不对
     
 */

/* 
  a -> 4 -> undefined
*/
//   var a=4;
    
//   function b(x,y,a) {    
//       /* 
//         x -> 1
//         y -> 2
//         a -> 3 -> 10
//       */
//        console.log(a);//=> 3 
      
//        arguments[2]=10;        
      
//        console.log(a);//=> 10
      
//   }
      
//   a=b(1,2,3);   
      
//   console.log(a);//=> undefined
      
  
      
/*
    
    A、3  3  4   
        
    B、3  10  4   
        
    C、3  10  10   
        
    D、3  10  undefined
    
*/

// var foo='hello'; 
    
// (function(foo){
//    /* 
//      foo -> 'hello' -> 'hello'
//    */
//    console.log(foo);

//    /* 
//      var重复声明会被忽略
//    */
//    var foo = foo||'world';
    
//    console.log(foo);
    
// })(foo);
    
// console.log(foo);
    

    
/*
    
 A、hello hello hello   
    
 B、undefined world  hello   
    
 C、hello world world   
    
 D、以上答案都不正确
    
*/


// var a=9; 
    
// function fn(){ 
    
//     a=0;       
    
//     return function(b){ 
    
//         return b+a++; 
    
//     }    
    
// }
    
// var f=fn();
    
// console.log(f(5));
    
// console.log(fn()(5));
    
// console.log(f(5));
    
// console.log(a);
    

    
/*
    
 A、6 6 7 2   
    
 B、5 6 7 3   
    
 C、5 5 6 3   
    
 D、以上答案都不正确 
    
*/


// function fn(i) {
    
//     return function (n) {
    
//         console.log(n + (i++));
    
//     }
    
// }

// /* 
//   fn(f)
//    i -> 10 -> 11
// */
// var f = fn(10);

// f(20);//=> 30

// fn(20)(40);//=> 60
    
// fn(30)(50);//=> 80
    
// f(30);//=> 41
    
var i = 10;
    
function fn() {
    
    return function (n) {
    
        console.log(n + (++i));
    
    }
    
}
    
var f = fn();
    
f(20);//=> 31
    
fn()(20);//=> 32
    
fn()(30);//=> 43
    
f(30);//=> 44


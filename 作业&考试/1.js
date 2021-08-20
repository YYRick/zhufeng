/* 
 实现一个方法，
 检测该属性是否是该对象的公有属性。
*/
/* Object.prototype.hasPubproperty = function hasPubproperty(attr){
     let proto = Object.getPrototypeOf(this);
     while(proto){
         if(proto.hasOwnProperty(attr)) return true;
         proto = Object.getPrototypeOf(proto);
     }
     return false;
}

let obj = {
    name: 'yyrick',
    age: 22
}


console.log(obj.hasPubproperty('name'));
console.log(obj.hasPubproperty('hasPubproperty')); */


/* let obj = {
  name:'zf',
  age:12,
  b:2
};
let {age=10,name='zhufeng',bb=22} = obj;
console.log(age,name,bb) */

/* var obj1 = {
    a: 1
  }
  var obj2 = {
    a: 2,
    foo1: function () {
      console.log(this.a)
    },
    foo2: function () {
      setTimeout(function () {
        console.log(this.a)
      }, 0)
    }
  }
  var a = 3
  
  obj2.foo1()
  obj2.foo1.call(obj1)
  
  obj2.foo2()
  obj2.foo2.call(obj1) */

/*   function foo () {
    console.log(this.a);
    return function () {
      console.log(this.a);
    }
  }
  var obj = { a: 1 };
  var a = 2;
  
  foo();
  foo.call(obj);
  foo().call(obj); */

/*   function Person() {
    this.name = 'zhufeng';
}
Person.prototype.getName = function () {
    console.log(this.name);
    console.log(this.age);
};
Person.prototype.age = 5000;
var per1 = new Person();
per1.getName();
per1.age = 9;
per1.getName();
console.log(per1.age);
var per2 = new Person();
console.log(per2.age); */

/* function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    };
}
fun.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a);
    },
};
var my_fun = new fun();
my_fun.b();
my_fun.c(); */

/* function Foo() {
    getName = function () {
      console.log(1);
    };
    return this;
  }
  Foo.getName = function () {
    console.log(2);
  };
  Foo.prototype.getName = function () {
    console.log(3);
  };
  var getName = function () {
    console.log(4);
  };
  function getName() {
    console.log(5);
  }
  Foo.getName();
  getName();
  Foo().getName();
  getName();
  new Foo.getName();
  new Foo().getName(); */

/* ~function(){
    function unique(){
        let obj = {},
            _this = this;
        for(let i= 0;i < _this.length ; i++){
        	let item =_this[i];
            if(obj.hasOwnProperty(item)){
                _this[i] = _this[_this.length-1];
                _this.length--;
                i--;
                continue;
            }
            obj[item] = item;
        }
        obj = null;
        return _this;
    }
    Array.prototype.unique = unique;
}();

let ary = [12,23,12,13,13,12,23,14,8];
console.log(ary.unique());;//=>[12,23,13,14,8]去重后的新数组 */



~ function () {
	function checkX(x) {
		x = Number(x);
		return isNaN(x) ? 0 : x;
	}

	function plus(x) {
		x = checkX(x);
		return this + x;
	}

	function minus(x) {
		x = checkX(x);
		return this - x;
	}
	Number.prototype.plus = plus;
	Number.prototype.minus = minus;
}();
let n = 10;
let m = n.plus(10).minus(5);
console.log(m)
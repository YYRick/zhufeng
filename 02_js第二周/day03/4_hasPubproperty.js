Object.prototype.hasPubProperty = function hasPubProperty(attr) {
    // this -> obj
    // attr -> 要检测的公有属性
    // 思路：不论对象的私有属性中是否存在这个属性，只要它公有属性中有这个属性「只要是实例所属类的原型上写的属性都是实例的公有属性，而且一直要到Object.prototype」，则结果是true
    // 具体实现：首先获取当前实例this(obj)的原型对象@A，看@A中是否存在attr这个属性，存在则直接返回true，说明attr是它的一个公有属性，如果不存在，则找@A的原型对象...直到找到Object.prototype；如果整个过程中都没有找到对应的属性，则说明attr压根不是他的公共属性，返回false即可!!
    //   + Object.getPrototypeOf(实例)：获取某个实例的原型对象
    let proto = Object.getPrototypeOf(this);
    while (proto) {
        // 如果传递的进来的attr是当前找到的proto原型对象中的一个私有属性，则说明attr是实例的一个公有属性
        if (proto.hasOwnProperty(attr)) return true;
        // 只要还可以找到原型对象，则一直向上找
        proto = Object.getPrototypeOf(proto);
    }
    return false;
};

let obj = {
    name: 'zhufeng',
    toString: 100
};
console.log(obj.hasPubProperty('name'));
console.log(obj.hasPubProperty('toString'));
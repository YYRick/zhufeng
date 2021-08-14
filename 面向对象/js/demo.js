//使用构造函数模拟类
function People(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
}

People.prototype.intro = function(){
    console.log('I am ' + this.name + '. ' + this.height + ' tall.'+ ' And '+ this.weight + ' kilos');
}

People.prototype.eat = function(){
    console.log('I am eating');
}

People.prototype.sleep = function(){
    console.log('I am sleeping');
}

People.prototype.drink = function(){
    console.log('I am drinking water');
}

var xiaoming = new People('小明', 175, 70);
var xiaohong = new People('小红', 160, 40);

xiaoming.intro();
xiaoming.drink();

xiaohong.intro();
xiaohong.eat();
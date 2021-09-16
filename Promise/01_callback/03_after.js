//多个异步请求，如果同时获取最终结果

let fs = require('fs');
let school = {};

let index = 0;
const cb = () =>{
    if(++index === 2){
        console.log(school);
    }
}

fs.readFile('./name.txt', 'utf8', function(err, data){
    school.name = data;
    cb();
});

fs.readFile('./age.txt', 'utf8', function(err, data){
    school.age = data;
    cb();
});



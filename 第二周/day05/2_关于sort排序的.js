let ary = [
    {
        id: 1,
        age: 25
    },
    {
        id: 2,
        age: 32
    },
    {
        id: 3,
        age: 23
    }
];

//=>把数组的中的每一项按照age进行升序排序
ary.sort((a,b) => {
    //b：当前项  a：当前项的下一项
    return a.age - b.age;
});

//=>把数组的中的每一项按照age进行降序排序
ary.sort((a,b) => {
    //b：当前项  a：当前项的下一项
    return b.age - a.age;
});
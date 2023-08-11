const titleCase=(str)=>{
str = str.split(" ").map(e=>e.split(""));
for(let i in str){
    i[0]=i[0].toUpperCase()
}
console.log(str);
}

console.log(titleCase("hello world ha howdy"))

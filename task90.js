//task90
let task90={x:1,y:2,z:3};
let task90key='x';
console.log(task90[task90key]);
//task93
let task93key1='x'
let task93key2='y'
let task93key3='z'
let task93={
    [task93key1]:1,
    [task93key2]:2,
    [task93key3]:3
};
console.log(task93['x']);
//task102
let task102arr=[1,2,3,4,5];
let task102res=task102arr[1]+task102arr[2];
console.log(task102res);
//task103
let task103obj_1={x:1,y:2,z:3};
console.log(task103obj_1['x']);
let task103obj_2={x:1,y:2,z:3};
let task103key='x';
console.log(task103obj_2[task103key]);
let task103obj_3={x:1,y:2,z:3};
let task103sum=task103obj_3['x']+task103obj_3['y']+task103obj_3['x'];
console.log(task103sum);
let task103key_4=Object.keys(task103obj_3)
console.log(task103key_4.length);
//task105
let task105test=9;
if(task105test>10){
    console.log('+++')
}
else{
    console.log('---')
}
if(task105test<10){
    console.log('+++');
}
else{
    console.log('___');
}
//task106
let task106=10;
if(task106==10){
    console.log('+++');
}
else{
    console.log('---');
}
//task107
let task107=8;
if(task107!=10){
    console.log('+++');
}
else{
    console.log('---');
}
//task108
let task108_1_1=8;
let task108_2_1=7;
if(task108_1_1>task108_2_1){
    console.log('+++');
}
else{
    console.log('---');
}
let task108_1_2=10;
let task108_2_2=8;
if(task108_1_2==task108_2_2){
    console.log('+++');
}
else{
    console.log('---');
}
//task109
let task109='abcd';
if(task109=='abcd'){
    console.log('+++')
}else{
    console.log('---');
}
//task110
let task110_1='123'
let task110_2=123
if(task110_1==task110_2){
    console.log('+++')
}else{
    console.log('---')
}
//task113
let task113_1=7
if(task113_1>0 && task113_1<5){
    console.log('+++')
}else{
    console.log('---')
}
task113_1=18
if(task113_1>=10 && task113_1<=20){
    console.log('+++')
}else{
    console.log('---')
}
let task113_2=2;
if(task113_1<=1 && task113_2>=3){
    console.log('+++')
}else{
    console.log('---')
}
//task117
let task117_1=9
let task117_2=5
if(!(task117_1>=0 || task117_2<=10)){
    console.log('+++');
} else {
	console.log('---');
}
//task118
let task118=true
if(task118==true){
    console.log('+++')
}else{
    console.log('---')
}
if(task118==false){
    console.log('+++')
}else{
    console.log('---')
}
//task120
let task120=true
if(task120){
    console.log('+++')
}else{
    console.log('---')
}
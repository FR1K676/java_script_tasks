//task80
let obj={1:'понедельник',2:'вторник',3:'среда',4:'четверг',5:'пятница',6:'суббота',7:'воскресенье'};
console.log(obj[1],obj[2],obj[3],obj[4],obj[5],obj[6],obj[7]);
//task81
let month={1:'январь',2:'февраль',3:'март',4:'апрель',5:'май',6:'июнь',7:'июль',8:'август',9:'сентябрь',10:'октябрь',11:'ноябрь',12:'декабрь'};
console.log(month);
//task82
let user={name:'Nikita',surname:'Shurygin',patronymic:'Vyacheslavovich'};
console.log(user['surname'],user['name'],user['patronymic']);
//task83
let date={year:2024,months:10, day:21};
console.log(date.year,date.months,date.day);
//task85
let kv={x: 1, y: 2, z: 3};
for (let key in kv) {
    kv[key] = kv[key] ** 2;
  }
console.log(kv);
//task86
let task86={};
task86.a=1;
task86.b=2;
task86.c=3;
console.log(task86);
//task88
let task88 = {x: 1, y: 2, z: 3};
let keys=Object.keys(task88);
console.log(keys);
//task89
let task89={x: 1, y: 2, z: 3};
let key89=Object.keys(task89);
console.log(key89.length);

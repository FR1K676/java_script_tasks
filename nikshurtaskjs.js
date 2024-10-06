//task54_1
let a='abcde';
alert(a[a.length-1]);
//task54_2
alert(a[a.length-2]);
//task54_3
alert(a[a.length-3]);
//task55_1
let b='12345'
alert(Number(b[0])+Number(b[1])+Number(b[2])+Number(b[3])+Number(b[4]));
//task56_1
let x=String(12345);
alert(Number(x[0])+Number(x[1])+Number(x[2])+Number(x[3])+Number(x[4]));
//task56_2
alert(Number(x[0])*Number(x[1])*Number(x[2])*Number(x[3])*Number(x[4]));
//task56_3
let y=12345;
let stry=y.toString();
let digits=stry.split('');
digits=digits.reverse();
let reversedstrnum=digits.join('');
alert(reversedstrnum);
//task58_1
let num=47;
num+=7;
num-=18;
num*=10;
num/=15;
alert(num);
//task 59_1
num=10;
num++;
num++;
num--;
alert(num);
//task61_2
alert(0.1*0.2);
//task61_2
alert(0.3-0.1);
//task62_1
let age=prompt('Your age?');
alert('Your age:'+age);
//task63_1
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
alert(Number(num1) + Number(num2));
//task63_2
let c=prompt('Vvedite storonu kvadrata:');
d=Number(c);
alert(c**2);
//task63_3
c=prompt('vvedite chislo a:');
d=prompt('vvedite chislo b:');
let e=Number(c);
let f=Number(d);
alert(2*(e+f));
//task64_1
document.write(123);
//task64_2
document.write('<i>1234</i>');
//task64_3
let str='text<br>';
document.write(str);
//task64_4
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');
//task65_1
let num3=1;
let num4=2;
let num5=num3+num4
console.log('summa '+num5);
//task66_1
console.log(3600*24);
//task66_2
console.log(3600*24*30);
//task66_3
console.log(3600*24*365);
//task66_4
console.log(60*24);
//task66_5
console.log(60*24*365);
//task66_6
console.log(1024*1024)
//task66_7
console.log(1024**3);
//task66_8
console.log((1024**3)*10);
//task66_9
console.log(1024**4);
//task66_10
console.log(1024**3);
//task67_1
let r=2;
const pi=3.14;
let s=r**2*pi;
alert(s);
//task68_1
let arr=[1,2,3,4,5];
alert(arr);
console.log(arr);
//task68_2
let arrstr=['1','2','3','4']
alert(arrstr);
console.log(arrstr);





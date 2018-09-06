//RegExp
//let some_variable = /regexp/flags
//let some = /q/;
//let check = some.test('pouring');
//console.log(check);

//let myName = prompt('Enter your name');
////let reg = /Petro/;
//
//let reg = /Petro/i;
//if(reg.test(myName)){
//    console.log('You have the same name')
//}
//else {
//  console.log('This is not my name')  
//}

//let reg1 = /l[gon]s/i;
//let someTest = prompt('Enter some text')
//
//if(reg1.test(someTest)){
//    console.log('yes')
//}
//else {
//    console.log('no')
//}

let reg2 = /[^b]log/;//dlog, alog, not blog
let reg3 = /[A-Z]/;//only big letters A-Z
//Main sumbols
/*

\ - перетворює спеціальний символ в звичайний і навпаки 
let date = /[0-9]\/[0-9]\/2016/

. - будь який символ крім переводу стрічки 

let reg4 = /[^b]l.g/

* - повтор попереднього символу 0 або більше разів 

+ - повтор попереднього символу 1 чи більше разів 

? - повтор попереднього символу 0 чи 1 раз

\d - будь яка цифра 

\w - любий символ(цифра буква і _)

[LOG] - любий символ з вказаних 

[LOG]+  - один або більше з символів з вказаних 

^ - каретка означає початок даних
$ - кінець даних 

[^a-z] - не букви з нижнім регістром

() - запам'ятовуючі дужки 

|  або 

\s символ пробілу 

{m, n} від m до  n повторень

*/



//let reg5 = /T[a-z]{3,7}S/;
//
//let myString = 'I love DC and DC is the best';
//
//let reg6 = /dc/ig;
//
//let newString = myString.replace(reg6, 'Marvel');
//
//console.log(newString);
//
//let str2 = 'I am Batman';
//let toMatch = /Bat+/
//console.log(str2.search(toMatch));
//console.log(str2.match(toMatch));

let mail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z{2,4}])$/;





























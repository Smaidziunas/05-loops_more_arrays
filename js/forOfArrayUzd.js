'use strict';
console.log('forOfArrayUzd.js');

let numbers = [50, 15, -10, 0, 40, 7, 13, 2, -14, -27];

// 1 iskonsolinti visas reiksmes su for of
{
  let visuma = '';
for (const reiksmes of numbers) {
  visuma =`${visuma} ${reiksmes}`;
}
// console.log(visuma);

}

// 2. atspausdinti visus teigiamus skaicius su for of

{
for (const teigiami of numbers) {
  if(teigiami > 0) {
  // console.log(teigiami);
  }
}
}

// 3. pakeisti 40 i 37 pagal indexa

{
  // let indexRslt = numbers.indexOf(40);
  // if (numbers.indexOf(40) === indexRslt) {
  //   numbers[indexRslt] = 37;
  // }
  // console.log(numbers)

}


// 4. atspausdinti visas reiksmes didesnes uz 10

{
for (const iterator of numbers) {
if (iterator > 10) {
// console.log(iterator);
}
}
}

// 5. atspausdinti paskutini elementa padauginta is 2 nenaudojant rankinio indexo.

{
let lastElnew = numbers[numbers.length -1]*2;

// console.log(lastElnew);
}
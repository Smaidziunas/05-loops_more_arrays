'use strict';
console.log('uzd.js');


// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3

        // for (let i = 12; i <= 24; i++) {
        //   let padaugintas = i * 3;
        //   console.log(i, 'padaugintas ===', padaugintas);
        // }


// 20. sudauginti skaiciu nuo kintamojo min iki kintamojo max
  // min 5. max 10
  // sudauginti ir aspausdinti skaiciu daugybos rezultata


let min = 5;
let max = 10;
let total = 1;

for (let i = min; i <= max; i++) {
  total = total * i;
  // console.log('total ===', total);
    // "ispausdina kiekvieno i rezulta"
}
// console.log('total ===', total);
  // isspausdina galutini rezultata;

  




// 21. Sudeti skaicius nuo 17 iki 33. atspausdinti suma ir kiek buvo ciklu

let ciklas = 0;
let suma = 0;
for(let i = 17; i  < 33; i++) {
  suma = suma + i;
  ciklas = i;
}
// console.log('suma ===', suma);
// console.log('ciklas ===', ciklas);





// 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.

let daugyba = 1;
let rezultatas = 0;

for(let i = -4; i <= 7; i++){
    if(i === 0) {
      continue;
    }
  daugyba = daugyba * i;
  if(i === 6) {
    rezultatas = daugyba / 3;
  }
//  console.log( 'i===', i, 'daugybaViduje ===', daugyba);
}
  // console.log('daugyba ===', daugyba);
  // console.log('rezultatas ===', rezultatas);



// 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu

let myString = "";

for(let i = 44; i <= 66; i++) {
  myString = `${myString} ${i} ||`;
}
// console.log('myString ===', myString);




// for (let i = 1; i <= 10; i++) {
//   if (i === 2) {
//   a = "du";
//   }
//   if (i === 3) {
//   a = "trys";
//   }
//   console.log(a);
//   }
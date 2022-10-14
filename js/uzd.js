'use strict';
console.log('uzd.js');


// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3
{
        for (let i = 12; i <= 24; i++) {
          let padaugintas = i * 3;
          // console.log(i, 'padaugintas ===', padaugintas);
        }
}

// 20. sudauginti skaiciu nuo kintamojo min iki kintamojo max
  // min 5. max 10
  // sudauginti ir aspausdinti skaiciu daugybos rezultata

{
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
}
  

// 21. Sudeti skaicius nuo 17 iki 33. atspausdinti suma ir kiek buvo ciklu

{
let ciklas = 0;
let suma = 0;
for(let i = 17; i  < 33; i++) {
  suma = suma + i;
  ciklas = i;
}
// console.log('suma ===', suma);
// console.log('ciklas ===', ciklas);

}



// 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.
{
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

  // console.log('daugyba ===', daugyba);
  // console.log('rezultatas ===', rezultatas);
}
}


// 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu
{
let myString = "";

for(let i = 44; i <= 66; i++) {
  myString = `${myString} ${i} ||`;
}
// console.log('myString ===', myString);

}

// 24. Suskaiciuoti kie yra skaiciau 3 kartotiniu nuo 12 iki 57

{
  let kartotiniai = 0;
let kartotiniuSum = 0;
for(let i = 12; i <= 57; i++) {
  if(i % 3 === 0) {
  kartotiniai = kartotiniai + 1;
  kartotiniuSum = kartotiniuSum + i;
  // console.log(i);
  }
}
// console.log('kartotiniai ===', kartotiniai);
// console.log('kartotiniuSum ===', kartotiniuSum);
} 


// 25. suskaiciuoti koks butu vidurkis skaiciu nuo 45 iki 87
{
let cikluSk = 0;
let sum = 0;
let vidurkis = 0;
for(let i = 45; i <= 87; i++) {
sum = sum + i;
cikluSk = cikluSk +1;
// ciklusSk++;

  // if(i === 87) {
  //   vidurkis = sum / cikluSk;
  // }
}
vidurkis = sum / cikluSk;
// console.log('vidurkis ===', vidurkis);
// console.log('cikluSk ===', cikluSk);
// console.log('sum ===', sum);

}

// 26. sugeneruoti 3 random skaicius nuo 1 iki 10 ir pranesti:
// a: ar buvo skaicius didesnis uz 7?
// b: ar buvo skaicius mazesnis uz 3?
{
  let randomSk = 0;

for(let i = 1; i < 4; i++){
let rand = Math.trunc(Math.random() * 10) + 1;
randomSk = rand;
// if (rand > 7 ) {
//   console.log('Yes there was a nb bigger than 7');
//   console.log('random sk lygus===', rand);
//   console.log('ciklos numeris===', i);
// } else if (rand < 3) {
//   console.log('Yes there was a nb lesser than 3');
//   console.log('random sk lygus===', rand);
//   console.log('ciklos numeris===', i);
// }
// 
}
}


// 14. atspausdinti konsoleje skaicius nuo 3 iki 25, jei skaicius lyginis prirasyti prie jo zodeli 'lyginis' pvz
// 3
// 4 lyginis
// 5
// 6 lyginis
// ....
// 14.1 prideti dar prie skaiciu kurie yra 3 kartotiniai 'triju kartotinis'
// pvz
// 3 triju kartotinis
// 4 lyginis
// 5 triju kartotinis
// 6 lyginis
// ....

                // sprendimas su susikurtu variable:
{                
for(let i = 3; i < 25; i++) {
  let zodis = i;
  if (i % 2 === 0 && i % 3 === 0) {
    zodis =`${i}lyginis ir tryju kartotinis`;
  } else if (i % 2 === 0) {
    zodis =`${i}lyginis`;
  } else if (i % 3 === 0) {
    zodis =`${i}tryju kartotinis`;
  }
  // console.log('zodis ===', zodis);
}
}


                // sprenidimas nesikuriant variable:
{
for(let i = 3; i < 25; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    // console.log(`${i} lyginis ir tryju kartotinis`);
  } else if (i % 2 === 0) {
    // console.log(`${i} lyginis`);
  } else if (i % 3 === 0) {
    // console.log(`${i} tryju kartotinis`);
  }
  // console.log(i);
}}


                    // sprenidimas nesikuriant variable nerodant i;
{                  
for(let i = 3; i < 25; i++) {
if (i % 2 === 0 && i % 3 === 0) {
//    i = `lyginis ir tryju kartotinis`;
// console.log();
// } else if (i % 2 === 0) {

// console.log(`lyginis`);
// } else if (i % 3 === 0) {

// console.log(`tryju kartotinis`);
// }
// console.log(i);
}
}
}





                // sprendimas klaseje
{
// console.group('14. atspausdinti konsoleje skaicius nuo 3 iki 25,');

// for (let i = 3; i <= 25; i++) {
//   let rezultatas = '';
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(`${i} lyginis ir triju kartotinis`);
//   } else if (i % 2 === 0) {
//     console.log(`${i} lyginis`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} triju kartotinis`);
//   } else {
//     console.log(i);
//   }
//   console.log('rezultatas ===', rezultatas);
// }

}
/*
spausdinu visus skaicius bet
1, jei skaicius yra lyginis tai pridedu zodi lyginis ir nespausdinu be zodzio
2. jei skaicius yra triju kartotinis tai spauzdinu 'triju kartotinis' ir nespausdinu be zodzio
3. jei skai yra ir lyginis ir triju kartotinis tai spausdinu abu zodzius 
*/


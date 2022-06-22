// string
// 'strings'

// number
// 23
// 54

// boolean
// true
// false


const arrays = ['strings', 12, true];

const objects = {
  name: 'Onelio',
  age: 12,
  job: {
    description: '.....',
    title: 'aiojdioajsdiojas',
  },
};

// const sayHiTo = someone => {
function sayHiTo(someone) {

  if (!someone || typeof someone !== 'string') {
    // throw new Error('O valor ' + someone + ' não é valido');
    console.error(`O valor ${someone} não é valido`);
    return;
  }

  console.log(`Hi ${someone}`);
}

// sayHiTo('Onelio');
// sayHiTo(52);
// sayHiTo(true);
// sayHiTo({ name: 'oioi' });
// sayHiTo([]);
// sayHiTo(false);
// sayHiTo();
// sayHiTo(null);
// sayHiTo(0);
// sayHiTo(undefined);
// sayHiTo('Marco');

// const number = 52;
// if (number === 52) { console.log('number is 52'); }
// == compara valor
// === compara tipo e valor
// if (number == '52') { console.log('number is 52 -----'); }
// console.log(number);


// const gatos = [
// 'Luigi',
// 'Katita',
// 'Miah',
// 'Amora',
// 'Ravi',
// 'Pirralho',
// ];

// gatos.forEach(function(gato) {
// console.log(`Eu tenho o gato ${gato}`);
// });

// const sayHiTo = someone => console.log(`Hi ${someone}`);

const cats = [
  { name: 'Luigi', gender: 'MALE' },
  { name: 'Katita', gender: 'FEMALE' },
  { name: 'Miah', gender: 'FEMALE' },
  { name: 'Amora', gender: 'FEMALE' },
  { name: 'Ravi', gender: undefined },
  { name: 'Pirralho', gender: 'MALE' },
];

cats.forEach(cat => {

  // let theCat;

  // if (cat.gender === 'MALE') {
  // theCat = 'o gato';
  // } else if (cat.gender === 'FEMALE') {
  // theCat = 'a gata';
  // } else {
  // theCat = 'o ser';
  // }

  const theCat = cat.gender === 'FEMALE' ? 'a gata' : 'o gato';

  console.log(`Eu tenho ${theCat} ${cat.name}`);
});


// for (let i = 0; i < cats.length; i++) {
  // const cat = cats[i];

  // console.log(cat.name);
// }

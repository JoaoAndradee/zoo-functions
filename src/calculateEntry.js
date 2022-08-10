const data = require('../data/zoo_data');

const pessoas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((item) => {
    if (item.age < 18) {
      child += 1;
    } else if (item.age >= 18 && item.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

const empatyTickets = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
};

function calculateEntry(entrants) {
  if (empatyTickets(entrants) === 0) {
    return 0;
  }
  return Object.entries(countEntrants(entrants)).reduce((acc, valor) => {
    let total = acc;
    if (valor[0] === 'child') {
      total += valor[1] * 20.99;
    } else if (valor[0] === 'adult') {
      total += valor[1] * 49.99;
    } else if (valor[0] === 'senior') {
      total += valor[1] * 24.99;
    }
    return total;
  }, 0);
}

console.log(calculateEntry(pessoas));

module.exports = { calculateEntry, countEntrants };

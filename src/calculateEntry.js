const data = require('../data/zoo_data');

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
    return true;
  }
};

function calculateEntry(entrants) {
  if (empatyTickets(entrants)) {
    console.log('chegou aqui');
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

module.exports = { calculateEntry, countEntrants, empatyTickets };

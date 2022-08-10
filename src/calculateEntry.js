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
    return 0;
  }
};

/* eslint-disable no-param-reassign */
// Eu desabilitei o no-param-reassign do eslint pois pra mim não faz sentido não poder modificar o acumulador no método do reduce, tentei procurar uma alternativa mas não encontrei. Acho que até seria possível no máximo usar o spread como nesse exemplo (https://stackoverflow.com/questions/41625399/how-to-handle-eslint-no-param-reassign-rule-in-array-prototype-reduce-function)mas seria gambiarra em cima de gambiarra e só resultaria em mais linhas de códigos e espaço na memória que não faz sentido nenhum, nessa página do forum o pessoal diz que é melhor mesmo só desativar o no-param-reassign.

function calculateEntry(entrants) {
  if (empatyTickets(entrants) === 0) {
    return 0;
  }
  return Object.entries(countEntrants(entrants)).reduce((acc, valor) => {
    if (valor[0] === 'child') {
      acc += valor[1] * 20.99;
    } else if (valor[0] === 'adult') {
      acc += valor[1] * 49.99;
    } else if (valor[0] === 'senior') {
      acc += valor[1] * 24.99;
    }
    return acc;
  }, 0);
}

module.exports = { calculateEntry, countEntrants };

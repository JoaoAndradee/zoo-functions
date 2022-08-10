const data = require('../data/zoo_data');

const { species } = data;

function allAnimals() {
  const speciesFromZoo = [];
  species.forEach((item) => {
    const { name, residents } = item;
    return speciesFromZoo.push([name, residents.length]);
  });
  return Object.fromEntries(speciesFromZoo);
}

function getAnimalByNameAndSex(animal) {
  let total;
  species.forEach((item) => {
    const { residents } = item;
    if (animal.specie === item.name) {
      total = residents.length;
    }
    if (animal.specie === item.name && animal.sex) {
      total = residents.filter((item2) => item2.sex === animal.sex).length;
    }
  });
  return total;
}

function countAnimals(animal) {
  if (!animal) {
    return allAnimals();
  }
  return getAnimalByNameAndSex(animal);
}

module.exports = countAnimals;

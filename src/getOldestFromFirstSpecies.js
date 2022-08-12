const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimalResponsibleFor = data.employees.find((e) => e.id === id).responsibleFor[0];
  const getOlderAnimal = data.species.find((e) => e.id === firstAnimalResponsibleFor).residents
    .reduce((acc, currentValue) => {
      if (currentValue.age > acc.age) {
        return currentValue;
      }
      return acc;
    });

  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;

/* eslint-disable complexity */
const data = require('../data/zoo_data');

const { species: spe } = data;

const animalsName = {
  NE: [
    { lions: spe.filter((e) => e.name === 'lions')[0].residents.map((item) => item.name) },
    { giraffes: spe.filter((e) => e.name === 'giraffes')[0].residents.map((item) => item.name) },
  ],
  NW: [
    { tigers: spe.filter((e) => e.name === 'tigers')[0].residents.map((item) => item.name) },
    { bears: spe.filter((e) => e.name === 'bears')[0].residents.map((item) => item.name) },
    { elephants: spe.filter((e) => e.name === 'elephants')[0].residents.map((item) => item.name) },
  ],
  SE: [
    { penguins: spe.filter((e) => e.name === 'penguins')[0].residents.map((item) => item.name) },
    { otters: spe.filter((e) => e.name === 'otters')[0].residents.map((item) => item.name) },
  ],
  SW: [
    { frogs: spe.filter((e) => e.name === 'frogs')[0].residents.map((item) => item.name) },
    { snakes: spe.filter((e) => e.name === 'snakes')[0].residents.map((item) => item.name) },
  ],
};

const aniamalsArea = {
  NE: data.species.filter((e) => e.location === 'NE').map((e) => e.name),
  NW: data.species.filter((e) => e.location === 'NW').map((e) => e.name),
  SE: data.species.filter((e) => e.location === 'SE').map((e) => e.name),
  SW: data.species.filter((e) => e.location === 'SW').map((e) => e.name),
};

console.log(Object.entries(animalsName).map((item) => item[1].map((item2) => console.log(item2))));

const getSpecieByArea = (obj) => {
  // la la la
};

getSpecieByArea();

const getSpeciesName = (obj) => {
  // lalala
}
function getAnimalMap(options) {
  // Seu código aqui
  if (!options || Object.keys(options).length === 0) {
    return getSpecieByArea();
  }
  if (options.includeNames && !options.sorted) {
    return getSpeciesName();
  }
  if (options.sorted) {
    return getSpeciesName();
  }
}

// console.log(getAnimalMap({ sex: 'female' }));

module.exports = getAnimalMap;

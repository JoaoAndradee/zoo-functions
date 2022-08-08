const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  return args.map((item) => data.species.find((el) => el.id === item));
}

module.exports = getSpeciesByIds;

const data = require('../data/zoo_data');

const { species } = data;
const { empatyTickets: empatySchedule } = require('./calculateEntry');

const zooHours = () => {
  const meuObj = {};
  Object.keys(data.hours).forEach((item) => {
    meuObj[item] = {
      officeHour: `Open from ${data.hours[item].open}am until ${data.hours[item].close}pm`,
      exhibition: data.species.reduce((acc, valor) => {
        const newArray = acc;
        if (valor.availability.indexOf(item) >= 0) {
          newArray.push(valor.name);
        }
        return newArray;
      }, []),
    };
  });
  meuObj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return meuObj;
};

const getDay = (dia) => {
  const day = Object.entries(zooHours()).reduce((acc, value) => {
    const total = acc;
    if (value[0] === dia) {
      total.push(value);
    }
    return total;
  }, []);
  return Object.fromEntries(day);
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (Object.keys(zooHours()).find((e) => e === scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  if (
    empatySchedule(scheduleTarget) || species.find((e) => e.name === scheduleTarget) === undefined
  ) {
    return zooHours();
  }
  return data.species.reduce((acc, value) => {
    let total = acc;
    if (value.name === scheduleTarget) {
      total = value.availability;
    }
    return total;
  }, []);
}

module.exports = getSchedule;

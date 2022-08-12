const data = require('../data/zoo_data');

function EmployeeResponsableForWhatSpecies(index) {
  const speciesByEmployee = data.employees[index].responsibleFor
    .map((item) => data.species.find((element) => element.id === item).name);
  return speciesByEmployee;
}

function locationsOfSpecies(index) {
  const teste = EmployeeResponsableForWhatSpecies(index)
    .map((item) => data.species.find((e) => e.name === item).location);
  return teste;
}

function allCollaboratingPeople() {
  return data.employees.map((item, index) => (
    {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: EmployeeResponsableForWhatSpecies(index),
      locations: locationsOfSpecies(index),
    }
  ));
}

function findId(obj) {
  if (allCollaboratingPeople().find((e) => e.id === obj.id)) {
    return allCollaboratingPeople().find((e) => e.id === obj.id);
  }
  throw new Error('Informações inválidas');
}

function findName(obj) {
  let employee;
  allCollaboratingPeople().forEach((item, index) => {
    const firstNameAndLastName = item.fullName.split(' ');
    if (firstNameAndLastName.find((e) => e === obj.name)) {
      employee = allCollaboratingPeople()[index];
    }
  });
  return employee;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined || Object.keys(obj).length === 0) {
    return allCollaboratingPeople();
  }
  if (Object.keys(obj).includes('id')) {
    return findId(obj);
  }
  if (Object.keys(obj).includes('name')) {
    return findName(obj);
  }
}

module.exports = getEmployeesCoverage;

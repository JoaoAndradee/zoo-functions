const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  ];
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const responsibleFor = [];
    const arrayManagersOfEmployees = data.employees
      .map((item) => item.managers.filter((itemFilter) => itemFilter === managerId));
    arrayManagersOfEmployees.forEach((item, index) => {
      if (item.length > 0) {
        responsibleFor.push(`${data.employees[index].firstName} ${data.employees[index].lastName}`);
      }
    });
    return responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

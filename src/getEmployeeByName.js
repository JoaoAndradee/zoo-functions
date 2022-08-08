const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let employee;
  if (employeeName === undefined) {
    return {};
  }
  data.employees.forEach((item) => {
    if (item.firstName === employeeName || item.lastName === employeeName) {
      employee = item;
    }
  });
  return employee;
}

module.exports = getEmployeeByName;

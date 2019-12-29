console.log(321);
const { dataPick } = require('data-pick');
console.log(123, dataPick);
const jsonClass = {
  id: null,
  age: null
};
const data = {
  id: 1,
  age: 2,
  hight: 3,
  abc: 4
};
console.log(Object.keys(dataPick(data, jsonClass)));

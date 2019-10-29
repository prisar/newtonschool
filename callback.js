
const axios = require('axios');

axios.get('http://dummy.restapiexample.com/api/v1/employees')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


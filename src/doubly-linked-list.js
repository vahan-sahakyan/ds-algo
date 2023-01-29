const axios = require('axios');
const displayByExpress = require('../utils/displayByExpress');

(async () => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos/90');
  //   displayByExpress({ status: true, data });
  displayByExpress(data);
})();

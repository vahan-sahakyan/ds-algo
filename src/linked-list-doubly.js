const objlay = require('@vahan-sahakyan/objlay');
const axios = require('axios');

(async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/90');
  // objlay({ status: true, data });
  objlay(data);
})();

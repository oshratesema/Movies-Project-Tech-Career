const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const getMembers = () => {
  return axios.get(url);
};

module.exports = { getMembers };

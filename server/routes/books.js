const axios = require('axios');
require('dotenv').config();

function test() {
  axios({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes',
    responseType: 'json',
    params: {
      key: process.env.GOOGLEBOOKS_API,
      q: 'harry-potter'
    }
  })
    .then(function (response) {
      console.log(response.data);
    });
};

module.exports = test;
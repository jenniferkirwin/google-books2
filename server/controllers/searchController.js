const axios = require('axios');
require('dotenv').config();

module.exports = {
  searchBooks: (req, res) => {
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes',
      responseType: 'json',
      params: {
        key: process.env.GOOGLEBOOKS_API,
        q: req.params['query']
      }
    })
      .then(function (response) {
        console.log(response.data);
        res.sendStatus(200);
        console.log(req.params['query'])
      });
  }
};
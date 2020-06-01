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
      .then(function ({data: {items}}) {

        const foundBooks = [];

        if (items.length > 0) {
          items.forEach( (book) => {

            // rawBook = {
            //   id: '',
            //   title: '',
            //   authors: [],
            //   thumbnail: '',
            //   textSnippet: '',
            //   infoLink: '',
            //   favorite: false
            // }

            const id = book.id ? book.id : '';
            const title = book.volumeInfo.title ? book.volumeInfo.title : '';
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors : [];
            const thumbnail = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '';
            const textSnippet = book.searchInfo ? book.searchInfo.textSnippet : '';
            const infoLink = book.volumeInfo.infoLink ? book.volumeInfo.infoLink : '';

            foundBooks.push({
              id: id,
              title: title,
              authors: authors,
              thumbnail: thumbnail,
              textSnippet: textSnippet,
              infoLink: infoLink,
              favorite: false
            })
          })
        }
        res.status(200).json(foundBooks)
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
};
const db = require('../config/index');
const favCol = db.collection('favorites');

module.exports = {
  addFavorite: (req, res) => {
    favCol.doc(req.body.id).set({
      id: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      thumbnail: req.body.thumbnail,
      textSnippet: req.body.textSnippet,
      infoLink: req.body.infoLink,
      favorite: true
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  },
  updateFavorite: (req, res) => {
    favCol.doc(req.body.id).get()
      .then(doc => {
        if (!doc.exists) {
          favCol.doc(req.body.id).set({
            id: req.body.id,
            title: req.body.title,
            authors: req.body.authors,
            thumbnail: req.body.thumbnail,
            textSnippet: req.body.textSnippet,
            infoLink: req.body.infoLink,
            favorite: true
          }).then(ref => {
            console.log('Added document with ID: ', ref.id);
          });          
        }
        else {
          favCol.doc(req.body.id).update({
            favorite: false
          }).then(function() {
            console.log('Document Updated');
          });
        }
      })
  },
  findAll: (req, res) => {
    favCol.where('favorite', '==', true).get()
    .then(snapshot => {

      if (snapshot.empty) {
        // console.log('No matching documents.');
        res.status(200).json({})
        return;
      }

      const test = [];

      // snapshot.forEach(doc => {
      //   test.push(doc);
      //   console.log(test);
      // });

      // // res.status(200).json(doc);



      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        test.push(doc.data())
        console.log(test)
      });

      res.status(200).json(test)

      
    })
    // .then(() => {res.sendStatus(200);})
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
};
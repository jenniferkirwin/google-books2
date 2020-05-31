const admin = require('firebase-admin');

let serviceAccount = require('../_keys/book-search-c1af4-firebase-adminsdk-5xk5d-fd99efca55.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

module.exports = db;
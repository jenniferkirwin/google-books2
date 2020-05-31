// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const router = require('express').Router();
const favoritesController = require('../controllers/favoritesController');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router.route('/')
  .get(favoritesController.findAll)

module.exports = router;
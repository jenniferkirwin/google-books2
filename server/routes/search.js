// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router.route('/:query')
  .get(searchController.searchBooks)

module.exports = router;
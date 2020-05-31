// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const express = require('express');
const cors = require('cors');

// Express Application
const app = express();
const PORT = process.env.PORT || 3001;

// CORS options
const corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Express Variables
const favoriteRoutes = require('./routes/favorites');
const searchRoutes = require('./routes/search');

//Express Routes
app.use('/', favoriteRoutes);
app.use('/search', searchRoutes);

// Starting Server
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
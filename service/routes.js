const express = require('express');
const router = express.Router();
const { handleAsync } = require('./util/errorHandler');

// Controllers
const twitchController = require('./controllers/twitchController');
const profileController = require('./controllers/profileController');

// ++ Default Profile GET
router.get('/profiles', 
  handleAsync(profileController.getProfiles)
);

module.exports = router;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const profileSchema = new mongoose.Schema({
  name: {type: String, required: 'Profile name is required'},
  twitchBotName: {type: String, required: 'Twitch bot name is required'},
  twitchChannel: {type: String, required: 'Twitch channel is required'},
  twitchKey: {type: String, required: 'Twitch Key is required'},
  twitchAdmins: {type: Array},
  screens: {type: Array},
  defaultProfile: {type: Boolean, default: false},
  dateCreated: {type: Date, default: Date.now},
});

profileSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('Profile', profileSchema);

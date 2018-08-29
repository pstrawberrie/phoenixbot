const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const schema = new mongoose.Schema({
  username: { type: String },
  userId: { type: String },
  admin: { type: Boolean, default: false},
  credits: { type: Number, default: 10 },
  dateCreated: { type: Date, default: Date.now }
});

schema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('TwitchUser', schema);

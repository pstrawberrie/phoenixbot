const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const profileSchema = new mongoose.Schema({
  name: { type: String },
  dateCreated: { type: Date, default: Date.now }
});

profileSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('Profile', profileSchema);

const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

// Test Index
exports.index = function(req, res) {
  return res.json({hi:'hi'});
}

// Get Profile
exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find({});
  console.log('Got Profiles: ', profiles);
  res.json(profiles);
};

// Create Profiles
exports.createProfile = async (req, res) => {
  const newProfile = new Profile(req.body.profile);
  await newProfile.save();
  res.json(req.body.profile);
};
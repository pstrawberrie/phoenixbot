/**
 * Twitch Controller
 */
const config = require('../config');
const mongoose = require('mongoose');
const TwitchUser = mongoose.model('TwitchUser');

// Find a user or make a new user
exports.test = (username) => {
  return new Promise((resolve, reject) => {
    function resolver(result) {resolve(result)}
    function rejector(error) {reject(error)}

    TwitchUser.findOne({name:username})
    .then(user => {
      if(user == null) {
        const newUser = new User({name: username});
        newUser.save()
        .then(saveResult => {
          console.log(`creepin on ${username}`);
          return resolver(saveResult);
        }).catch(err => {rejector(err)});
      }
      return resolver(user);

    }).catch(err => {rejector(err)})

  })
}

/**
 * Creep on a user (sent after every command)
 * @param {object} userstate
 */
exports.creepUser = async userstate => {
  if(config.devMode) {
    console.log(`Creeping on ${userstate.username}...`);
  }

  const dbUser = await TwitchUser.findOne({username:userstate.username});
  console.log(dbUser);
  if(dbUser === null) {
    const newUser = new User({
      username: userstate.username,
      userId: userstate['user-id']
    })
    await newUser.save();

    if(config.devMode) {
      console.log(`We just creeped on ${userstate.username}`);
    }
  } else {
    if(config.devMode) {
      console.log(`We already creeped ${userstate.username}`);
    }
  }
}
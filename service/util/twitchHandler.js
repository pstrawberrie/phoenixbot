const { handleAsync } = require('./errorHandler');
const config = require('../config');
const chalk = require('chalk');
const tmi = require('tmi.js');
const twitchUtil = require('./twitchUtil');
const twitchController = require('../controllers/twitchController');

//+ IRC Setup
const tmiOptions = {
  options: { debug:true},
  connection: {
    cluster:"aws",
    reconnect:true,
    timeout: 5000
  },
  identity: {
    username: config.twitchUsername,
    password: config.twitchKey
  },
  channels: config.twitchChannels
};
const irc = new tmi.client(tmiOptions);

//+ IRC Connected Listener
irc.on('connected', function() {
  console.log(chalk.magenta('+++ Phoenix connected to Twitch +++'));
  irc.say(config.twitchMainChannel, 'we here');
});

//+ IRC Disconnected Listener
irc.on('disconnected', function() {
  irc.whisper(config.botOwner, '+++ Phoenix disconnected from Twitch +++');
});

//+ IRC Chat Listener (this is the juicy part)
irc.on("chat", function (channel, userstate, message, self) {

  // Make sure this is a "!" command, and that the bot didn't send it
  if (self || !twitchUtil.validMessage(message)) return;
  const cleanMessage = twitchUtil.cleanMessage(message);

  // DEVMODE
  if(config.devMode) {
    console.log(`channel: ${channel} // user: ${userstate.username} (${userstate['user-id']}) // command: ${cleanMessage}`);
  }

  // Be a creeper and capture new users
  handleAsync(twitchController.creepUser(userstate));

});

module.exports = {

  listen() {
    irc.connect()
    .catch((error) => {
      console.log('Error connecting to IRC:');
      console.log(error);
    });
  },

  send(type, message, user) {
    if(type === 'say') { irc.say(config.twitchMainChannel, message) }
    if(type === 'whisper') { irc.whisper(user, message) }
    if(type === 'action') { irc.action(config.twitchMainChannel, message) }
  }

}

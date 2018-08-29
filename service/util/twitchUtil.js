/**
 * Twitch Utilities
 */

// Local Functions
const locals = {
  clean(message) {
    return message.toLowerCase();
  }
}

// Check if message is valid command
exports.validMessage = (message) => {
  return message != ''
         && message.substr(0,1) === '!'
         && message.split(' ').length <= 4
}

// Clean a message string
exports.cleanMessage = (message) => {
  return locals.clean(message);
}

// Convert a message string into an array
exports.arrayMessage = (message) => {
  return message.replace('!', '');
}
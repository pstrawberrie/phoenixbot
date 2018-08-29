// Route Command
exports.routeCommand = function(command, user) {
  const currentCommand = require(`../commands/${command}`);
  console.log(currentCommand);
}
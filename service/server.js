/**
 * Check Node Version
 */
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 8 || (major === 8 && minor <= 10)) {
  console.log('Please ensure your node version is >= 8.11.0');
  process.exit();
}

/**
 * Start Mongodb
 */
const config = require('./config');
const chalk = require('chalk');
const mongoose = require('mongoose');
mongoose.connect(config.db, { 
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000
});
mongoose.connection.on('connected', (err) => {
  console.log(chalk.yellow('+++ Mongodb Connected +++'));
  startServer();
});
mongoose.connection.on('error', (err) => {
  console.log(chalk.red('xxx Error Connecting to Mongodb xxx'));
});
mongoose.Promise = global.Promise;
require('./models/TwitchUser');
require('./models/Profile');

/**
 * Include Base Dependencies
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./util/errorHandler');

/**
 * Web Server
 */
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorHandler.notFound);

// Handle Errors
if (app.get('env') === 'development') {
  app.use(errorHandler.developmentErrors);
}
app.use(errorHandler.productionErrors);

// Wait until DB is connected to start the server & connect to twitch chat
function startServer() {
  /**
   * Start Web Server
   */
  app.set('port', process.env.PORT || 7777);
  server.listen(7777, () => {
    console.log(chalk.bold.white.bgBlue(` Phoenix Bot Server Started @ localhost:${server.address().port} `));
  });

  /**
   * Start Twitch Bot
   */
  // const twitchHandler = require('./util/twitchHandler');
  // twitchHandler.listen();

  /**
   * Start Socket Listener
   */
  const socketHandler = require('./util/socketHandler');
  socketHandler.listen(io);
}
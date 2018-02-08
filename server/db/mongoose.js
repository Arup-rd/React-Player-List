const mongoose = require('mongoose');

mongoose.connect('mongodb://aruprd:12345@ds217898.mlab.com:17898/react_player_list');

mongoose.Promise = global.Promise;

module.exports = mongoose;
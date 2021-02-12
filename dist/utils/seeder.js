"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

var _users = require("./users.js");

var _users2 = _interopRequireDefault(_users);

var _connectDB = require("../data/connectDB");

var _connectDB2 = _interopRequireDefault(_connectDB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// for dev use await
// await connectDB();
// for production dont use await
(0, _connectDB2.default)();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(_users2.default);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); //exits with an error status
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}; //checks for the arg flag -d on npm run data:destroy/data:import


process.argv[2] === '-d' ? destroyData() : importData();
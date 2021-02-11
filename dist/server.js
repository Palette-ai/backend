"use strict";

var _apolloServer = require("apollo-server");

var _apolloServer2 = _interopRequireDefault(_apolloServer);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _connectDB = require("./utils/connectDB.js");

var _connectDB2 = _interopRequireDefault(_connectDB);

var _index = require("./schema/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cors from 'cors'
_dotenv2.default.config(); // import mongoose from 'mongoose';


const {
  ApolloServer
} = _apolloServer2.default; // const corsOptions =
//   process.env.NODE_ENV === 'production'
//     ? {
//         origin: 'LINK_TO_DEPLOYED_FRONTEND',
//         credentials: true,
//       }
//     : {
//         origin: 'http://localhost:3000',
//         credentials: true,
//       };

const server = new ApolloServer({
  schema: _index2.default,
  // typeDefs,
  // resolvers,
  tracing: true,
  introspection: true,
  context: ({
    req
  }) => ({
    req
  })
});
(0, _connectDB2.default)(server);
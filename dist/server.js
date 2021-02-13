"use strict";

var _apolloServer = require("apollo-server");

var _apolloServer2 = _interopRequireDefault(_apolloServer);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _connectFirebase = require("./utils/connectFirebase.js");

var _connectFirebase2 = _interopRequireDefault(_connectFirebase);

require("./utils/connectMongo.js");

var _index = require("./schema/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cors from 'cors'
_dotenv2.default.config(); // import mongoose from 'mongoose';
// eslint-disable-next-line no-unused-vars


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
server.listen({
  port: process.env.PORT
}, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
}); // connectDB(server);
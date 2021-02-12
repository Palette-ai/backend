import apollo from 'apollo-server';
// import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
// import mongoose from 'mongoose';

import connectDB from './utils/connectDB.js';
// import resolvers from './graphql/resolvers/index.js'
// import typeDefs from './graphql/TypeDefs.js'
import schema from './schema/index.js';

const { ApolloServer } = apollo;

// const corsOptions =
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
  schema,
  // typeDefs,
  // resolvers,
  tracing: true,
  introspection: true,
  context: ({ req }) => ({ req }),
});

connectDB(server);

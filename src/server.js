import apollo from 'apollo-server';
// import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
// import mongoose from 'mongoose';


// eslint-disable-next-line no-unused-vars
import connectFirebase from './utils/connectFirebase.js';
import './utils/connectMongo.js';
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

server.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});

// connectDB(server);

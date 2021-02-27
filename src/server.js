import apollo from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import bodyParser from 'body-parser';

const axiosurl = 'https://palette-ml.herokuapp.com/';
// const axiosurl = 'http://localhost:7000/';

dotenv.config();

// eslint-disable-next-line no-unused-vars
import connectFirebase from './utils/connectFirebase.js';
import './utils/connectMongo.js';
import schema from './schema/index.js';

const app = express();
app.use(bodyParser());

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

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: true,
  onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
          if (mongoose.connection.readyState > 0) {
              resolve();
          } else {
              reject();
          }
      }),
});

app.get('/', (req, res) => {
  res.send('<h1>Congrats you found the Palette backend!!!!!!!!!!!</h1>');
});

app.post('/rec', (req, res) => {
  console.log('From client:', req.body);
  axios({
    method: 'post',
    url: axiosurl + 'rec',
    data: req.body,
  })
    .then((response) => {
      console.log('From Flask:', response.data);
      res.send(response.data);
    })
    .catch((e) => {
      console.log('Error:', e.message);
      res.status(520).json({status: e.status, message: e.message});
    });
});

connectFirebase(app);

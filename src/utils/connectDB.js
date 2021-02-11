// import mongoose from 'mongoose'
import * as admin from 'firebase-admin';
import colors from 'colors';

const connectDB = async (server) => {
  // const MONGODB = process.env.MONGODB
  const PORT = process.env.PORT || 5000;
  try {
    const firebase = admin.default.initializeApp({
      credential: admin.default.credential.cert({
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key.replace(/\\n/g, '\n'),
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
      }),
      databaseURL: 'https://palette-ai-default-rtdb.firebaseio.com/',
    });
    firebase
      ? console.log(
          `Firebase connected at https://palette-ai-default-rtdb.firebaseio.com/`
            .blue.underline
        )
      : console.log('Firebase not connected');

    if (server) {
      server.listen({ port: PORT }).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`.yellow.underline);
      });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    server.stop();
  }
};

export default connectDB;

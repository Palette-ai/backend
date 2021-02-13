"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseAdmin = require("firebase-admin");

var admin = _interopRequireWildcard(_firebaseAdmin);

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import mongoose from 'mongoose'
const connectFirebase = async server => {
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
        client_x509_cert_url: process.env.client_x509_cert_url
      }),
      databaseURL: 'https://palette-ai-default-rtdb.firebaseio.com/'
    });
    firebase ? console.log(`Firebase connected at https://palette-ai-default-rtdb.firebaseio.com/`.blue.underline) : console.log('Firebase not connected');

    if (server) {
      server.listen({
        port: PORT
      }).then(({
        url
      }) => {
        console.log(`🚀  Server ready at ${url}`.yellow.underline);
      });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    server.stop();
  }
};

exports.default = connectFirebase;
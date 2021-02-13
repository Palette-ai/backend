import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(({ connections }) => console.log(`User: ${connections[0].user} connected at ${connections[0]._connectionString}`.blue));

mongoose.set('useCreateIndex', true);

connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection;
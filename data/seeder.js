import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import users from './users.js';

import connectDB from '../data/connectDB';

// for dev use await
await connectDB();
// for production dont use await
// connectDB()

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

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
};

//checks for the arg flag -d on npm run data:destroy/data:import
process.argv[2] === '-d' ? destroyData() : importData();

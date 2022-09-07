import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined');
  }

  try {
    console.log('Connecting to the mongodb...');
    await mongoose.connect('mongodb://tickethub-auth-mongo-srv:27017/auth');
    console.log('Connected to the mongodb!');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on 3000!');
  });
};

start();

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

let connection: { isConnected?: number } = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    
    if (!process.env.MONGO) {
      throw new Error('MONGO environment variable is not defined');
    }

    const db = await mongoose.connect(process.env.MONGO, );

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error while connecting to database', error);
    throw new Error('Error while connecting to database');
  }
}
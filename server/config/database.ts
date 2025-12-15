import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopverse';

let isConnected = false; // Track connection status

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('📦 Already connected to MongoDB');
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    
    isConnected = db.connections[0].readyState === 1;
    
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
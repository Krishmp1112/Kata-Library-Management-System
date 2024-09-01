// import mongoose from 'mongoose';

// export const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGODB_URI as string;

//     if (!mongoURI) {
//       throw new Error('MongoDB URI is not defined in environment variables');
//     }

//     const connection = await mongoose.connect(mongoURI);
    
//     console.log(`MongoDB connected successfully to ${connection.connection.host}`);
//   } catch (error) {
//     console.error('MongoDB connection failed:');
//     process.exit(1); 
//   }
// };
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

// import mongoose from 'mongoose';

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI!, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         } as mongoose.ConnectOptions);
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('Error connecting to MongoDB', error);
//         process.exit(1);
//     }
// };


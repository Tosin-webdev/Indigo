import mongoose from "mongoose";

// const CONNECTION_URL =
//   "mongodb+srv://user1:simple02@node-tutorial.rsb65.mongodb.net/newDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

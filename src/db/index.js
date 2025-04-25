import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.log("Connect Successfuly");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

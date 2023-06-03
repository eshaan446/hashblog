import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected")
  } catch (error) {
    throw new Error("Connection to Database failed!");
  }
};

export default connect;
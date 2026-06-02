const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://rushana:rushana@cluster0.yzxwx9f.mongodb.net/growing_grove?retryWrites=true&w=majority";
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
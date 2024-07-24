const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useUnifiedTopology:true,
      // useNewUrlParser:true,
      // useCreateIndex:true
    });
    console.log(`mongodb connected hariom: ${conn.connection.host}`);
  } catch (error) {
    // console.error(`Error: ${error.message}`)
    console.log("can not connect to database", error);
    process.exit();
  }
};
module.exports = connectDB;

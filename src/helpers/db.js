const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose
    .connect("mongodb+srv://Amey45:Amey45@webdev.kioovy1.mongodb.net/todos")
    .then(() => {
      console.log(`Connected To Mongodb Database`);
    })
    .catch((err) => {
      console.log(`Error in Mongodb ${err}`);
    });
};

module.exports = connectDB;
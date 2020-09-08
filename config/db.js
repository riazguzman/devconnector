const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI"); // Grabs the global variable bound to "mongoURI" from the default.json file.

// Using async instead of .then to resolve the promises.
// Mongoose is a skin over the database, and makes it easier to interact with the server.
// Mongoose's connect() method was used here to return a promise containing the data from the database.

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// This file and folder is made for the purpose of accessing the
// global variable defined in 'config' (config is a module downloaded from npm).
// It also defines a function that connects to the database and returns the data.
// The function is then exported using 'module.exports', which allows the 'require()' function to acces it.

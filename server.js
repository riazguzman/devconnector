const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const PORT = process.env.PORT || 5000; // looks for environment variable which is useful with heroku, but if there are no environment variables, listen to local port 5000.

const app = express();

// Connect Database with connectDB.
connectDB();
// Init Middleware. Body parser for transforming data in 'req' and 'res' to be of a type compatible with sending information etc.
app.use(express.json({ extended: false }));
// Define Routes
app.use("/api/users", require("./routes/api/users")); // As seen in the users.js file, the route is defined to be '/'. The call to 'app.use' here allows the route to be pertained to the first argument. This is the way we import routes defined in another file.
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__direname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

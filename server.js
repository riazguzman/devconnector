const express = require("express");

const PORT = process.env.Port || 5000; // looks for environment variable which is useful with heroku, but if there are no environment variables, listen to local port 5000.

const app = express();

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

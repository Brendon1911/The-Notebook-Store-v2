// Requirements
const express = require("express"),
      chalk = require("chalk"),
      debug = require("debug"),
      morgan = require("morgan"),
      path = require("path"),
      port = process.env.PORT;
      
// Initialize app
const app = express();

// Use Morgan
app.use(morgan("tiny"));

// Index route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// 
app.listen(port, (req, res) => {
  console.log(`Server started on port ${chalk.green(port)}...`);
});
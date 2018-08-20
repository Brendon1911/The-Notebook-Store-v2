// Requirements
const express = require("express"),
      chalk = require("morgan"),
      debug = require("morgan"),
      morgan = require("morgan"),
      port = process.env.PORT;
      
// Initialize app
const app = express();

// Use Morgan
app.use(morgan("tiny"));

// Index route
app.get("/", (req, res) => {
  res.send("Application working");
});

// 
app.listen(port, (req, res) => {
  console.log(`Server started on port ${chalk.green(port)}`);
});
const express = require("express"),
      port = process.env.PORT;
      
const app = express();

app.get("/", (req, res) => {
  res.send("Application working");
});

app.listen(port, (req, res) => {
  console.log(`Server started on port ${port}`);
});
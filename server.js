const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Let's CI/CD !!!");
});

app.listen(process.env.port || 8000, () => console.log("Server is working"));

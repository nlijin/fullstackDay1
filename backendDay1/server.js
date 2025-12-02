const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from the the backend server" });
});

app.listen(3000, () => console.log("server running on port 3000"));

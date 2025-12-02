import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the the backend server" });
});

// you can also use HTML response as in below code;
app.get("/about", (req, res) => {
  res.send("<h2>Hello from backend about endpoint</h2>");
});

app.get("/contact", (req, res) => {
  res.send(
    "<div><h2>this is using multiple tags</h2><h2>my phone number is 123455667</h2></div>"
  );
});

app.listen(port, () => console.log(`server running on port ${port}`));

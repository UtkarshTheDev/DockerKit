import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome from a Dockerized express Server");
});

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT} in Dockerized Container`);
});

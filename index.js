import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RB-AI-BOT is running 🚀🤖");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// اختبار السيرفر
app.get('/', (req, res) => {
  res.send('RB-Ai-bot شغال 🔥🤖');
});

// لعبة الخصم
app.post('/game/spin', (req, res) => {
  const discounts = [5, 10, 15, 20, 30];
  const win = discounts[Math.floor(Math.random() * discounts.length)];

  res.json({
    message: `مبروك 🎉 كسبت خصم ${win}% 😎`,
    discount: win,
    code: `RB${win}${Math.floor(Math.random() * 1000)}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 RB-Ai-bot running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Compound interest calculation API
app.post('/api/calculate', (req, res) => {
  const { principal, rate, years, timesPerYear } = req.body;

  if ([principal, rate, years, timesPerYear].some(v => v == null)) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const r = rate / 100;
  const amount = principal * Math.pow(1 + r / timesPerYear, timesPerYear * years);
  const interest = amount - principal;

  res.json({ finalAmount: amount.toFixed(2), interestEarned: interest.toFixed(2) });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

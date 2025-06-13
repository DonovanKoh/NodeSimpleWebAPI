const express = require('express');// imprt express module
const path = require('path');//import path module node.js to help with file and directory paths
const app = express();//create express application
const PORT = process.env.PORT || 3000; //set port to 3000 or use the port from the environment variable for platorms like heroku or vercel to assign a dynamic port.

app.use(express.static('public'));// tells express to serve static files from the public directory
app.use(express.json()); //middleware for processing json data

// Compound interest calculation API
app.post('/api/calculate', (req, res) => {
  const { principal, rate, years, timesPerYear } = req.body; //object destructuring shorthand

  if ([principal, rate, years, timesPerYear].some(v => v == null)) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const r = rate / 100;
  const amount = principal * Math.pow(1 + r / timesPerYear, timesPerYear * years);
  const interest = amount - principal;

  res.json({ finalAmount: amount.toFixed(2), interestEarned: interest.toFixed(2) });
});

let goals = []; // In-memory storage for financial goals

app.post('/api/financial-goal', (req, res) => {
  const { principal, rate, years, timesPerYear, goalName } = req.body;
  if ([principal, rate, years, timesPerYear, goalName].some(v => v == null)) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const amount = principal * Math.pow(1 + rate / timesPerYear, timesPerYear * years);
  const goal = {
    id: Date.now().toString(),
    principal,
    rate,
    years,
    timesPerYear,
    goalName,
    amount: amount.toFixed(2)
  };
  goals.push(goal);
  res.status(201).json(goal);
});

app.get('/api/financial-goal', (req, res) => {
  res.json(goals);
});

app.put('/api/financial-goal', (req, res) => {
  const { id, updates } = req.body;
  const index = goals.findIndex(goal => goal.id === id);
  if (index === -1) return res.status(404).json({ error: 'Goal not found' });
  goals[index] = { ...goals[index], ...updates };
  res.json(goals[index]);
});

app.delete('/api/financial-goal', (req, res) => {
  const { goalId } = req.body;
  goals = goals.filter(goal => goal.id !== goalId);
  res.json({ success: true });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// routes
app,get('/api', (req, res) => res.json({ message: "Job Application Tracker API"}));

module.exports = app;
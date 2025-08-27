// app/server.js
const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from aman65f scalable app!",
    host: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => res.send('ok'));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


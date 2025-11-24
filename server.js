// server.js - minimal webhook receiver
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('--- GitHub webhook received ---');
  console.log('Headers:', req.headers['x-github-event']);
  console.log(JSON.stringify(req.body, null, 2));
  // TODO: later -> forward to Zoho Cliq
  res.status(200).send('ok');
});

app.get('/health', (req, res) => res.send('ok'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

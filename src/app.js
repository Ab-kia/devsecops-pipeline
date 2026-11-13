const express = require('express');
const app = express();
app.use(express.json());

const items = [
  { id: 1, name: 'notebook' },
  { id: 2, name: 'pen' },
];

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/items', (req, res) => res.json(items));
app.get('/api/items/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'not found' });
  res.json(item);
});

module.exports = app;

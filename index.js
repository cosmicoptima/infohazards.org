const express = require('express');
const app = express();
const port = 8001;

const NTFYSH_TOPIC = process.argv[2] || 'infohazards_org_default';

app.use(express.static('public'));

app.use(express.json());

app.post('/submit', (req, res) => {
  const description = req.body.description;
  fetch(`https://ntfy.sh/${NTFYSH_TOPIC}`, {
    method: 'POST',
    body: `New submission: ${description}`,
  });

  res.send('');
});

app.listen(port, () => {});

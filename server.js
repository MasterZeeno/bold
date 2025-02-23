import open from 'open';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Server running at ${url}`);
  open(url);
});


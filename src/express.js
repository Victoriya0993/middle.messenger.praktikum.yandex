import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../dist/`));

app.listen(PORT, () => {
  console.log(`Приложение запущено на порту ${PORT}!`);
});

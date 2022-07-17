const express=require('express');
const fileURLToPath = require('url');
const dirname=require('path');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../dist/`));

app.listen(PORT, () => {
  console.log(`Приложение запущено на порту ${PORT}!`);
});

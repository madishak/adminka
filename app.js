const express = require("express");

const fs = require("fs").promises;
const path = require("path");

// Импортируем роутеры
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Таким образом добавляем роуты из отдельных файлов
app.use(mainRoute, gamesRouter);

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});

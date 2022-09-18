// берём Express
const express = require('express');

// создаём Express-приложение
const app = express();

const port = process.env.PORT || 3000;

// создаём маршрут для главной страницы
// http://localhost:3080/
app.use(express.static('dist'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
// отправляем сообщение
console.log('Сервер стартовал!');

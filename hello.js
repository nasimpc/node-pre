const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {

    res.send('</body><form action ="/product" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Send</button></form></body>');

});
app.post('/product', (req, res, next) => {
    console.log(req.body['title'], req.body['size']);
    res.redirect('/');
});
app.use('/', (req, res, next) => {

    res.send('<h1> welcome from express</h1>');
});

app.listen(3000);
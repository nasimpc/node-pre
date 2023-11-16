const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
var imp = 'username';
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/login', (req, res, next) => {
    //res.send(`</body><form action ="/" method="POST"><input type="text" name="${req.body['username']}"></input><button type="submit">message</button></form></body>`);
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.use('/', (req, res, next) => {
    console.log(req.body);
    if ('msg' in req.body) {
        fs.appendFile('msg.txt', imp + req.body['msg'], (err) => {
            fs.readFile(path.join(__dirname, 'msg.txt'), (err, data) => {
                res.write('<html>');
                res.write(`<form action="/" method="POST" ><p id="a">${data.toString()}</p><input type="text" name="msg"></input><button type="submit">message</button></form>`);
                res.write('</html>');
                res.end();
            });
        });
    }
    else {
        imp = ' ' + req.body['login'] + ': '
        fs.readFile(path.join(__dirname, 'msg.txt'), (err, data) => {
            res.write('<html>');
            res.write(`<form action="/" method="POST" ><p id="a">${data.toString()}</p><input type="text" name="msg"></input><button type="submit">message</button></form>`);
            res.write('</html>');
            res.end();
        });

    }
    //res.send(`</body><form action ="/" method="POST"><input type="text" name="${req.body['username']}"></input><button type="submit">message</button></form></body>`);
    //console.log(path.join(__dirname, '../', 'views', 'login.html'));

});

app.listen(3000);
const http = require('http');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
//app.use(adminRoutes);
app.use(shopRoutes);
app.use('/success', (req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>')
});
app.use('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
app.use((req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
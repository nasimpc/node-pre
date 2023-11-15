const http = require('http');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop');

const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

//app.use('/admin', adminRoutes);
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
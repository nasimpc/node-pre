const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.write('<html>');
        res.write('</body>Welcome home</body>');
        res.write('</html>');
    }
    else if (req.url == '/about') {
        res.write('<html>');
        res.write('</body>Welcome to about us page</body>');
        res.write('</html>');

    }
    else if (req.url == '/node') {
        res.write('<html>');
        res.write('</body>Welcome to my node node js project</body>');
        res.write('</html>');

    }
});
server.listen(4000);
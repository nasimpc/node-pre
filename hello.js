const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<html>');
        res.write('</body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url == '/message' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1];
            fs.writeFile('msg.txt', msg, (err) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('</body>Welcome to my node node js project hi</body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);
const fs = require('fs');

const requestHandler = (req, res) => {
    if (req.url == '/') {
        res.write('<html>');

        return fs.readFile("msg.txt", { encoding: "utf8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data, 'hi1');

            res.write(`<body>${data}</body>`);
            res.write('</body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
            res.write('</html>');

            return res.end();

        });

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
            const msg = parsedBody.split('=')[0];
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
};
//module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'some hard coded text'
// };
module.exports.handler = requestHandler;
exports.someText = 'some hard coded text';
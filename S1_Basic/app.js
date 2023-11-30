const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Learn node</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
        fs.writeFileSync('message.text','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    };
    res.setHeader('Content-type', 'test/html');
    res.write('<html>');
    res.write('<head><title>Nodejs start</title></head>');
    res.write('<body><h1>Hello from node.js server</h1></body>');
    res.write('</html>');
    res.end();
})
;
server.listen(3030);
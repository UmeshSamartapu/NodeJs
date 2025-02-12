const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<Head><title>THIS IS MY WEB PAGE</title></Head>');
    res.write('<body><h1>LIKE SHARE SUBSCRIBE</h1></body>');
    res.write('</html>');
    res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:3000 on port ${PORT}`);
});





const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<Head><title>THIS IS MY WEB PAGE</title></Head>');

    if(req.url === '/')
        {
            res.write('<h1>HOME PAGE</h1>');
            return res.end();
        }
        else if(req.url.toLocaleLowerCase() === '/products'){
            res.write('<h1>PRODUCTS PAGE</h1>');
            return res.end();
        }
    res.write('<footer><p1>By Umesh ,please like share subscribe </p1></footer>');
    res.write('</html>');
    return res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:3000 on port ${PORT}`);
});

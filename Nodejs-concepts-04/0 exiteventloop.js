const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:3000 on port ${PORT}`);
});
